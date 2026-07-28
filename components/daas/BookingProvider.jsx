'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import BookingModal from '@/components/daas/BookingModal';
import { trackEvent } from '@/lib/analytics';

const BookingContext = createContext({
  openBooking: () => {},
  closeBooking: () => {},
  isOpen: false,
});

export function useBooking() {
  return useContext(BookingContext);
}

function getBookingUrl() {
  return process.env.NEXT_PUBLIC_CALCOM_URL || '';
}

export default function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const bookingUrl = getBookingUrl();

  const openBooking = useCallback((source = 'unknown') => {
    trackEvent('book_call_click', { booking_source: source });

    if (!bookingUrl) {
      trackEvent('book_call_mailto', { booking_source: source });
      window.location.href = 'mailto:hello@provoked.in?subject=Intro%20call%20request';
      return;
    }

    setIsOpen(true);
    trackEvent('booking_modal_open', { booking_source: source });
  }, [bookingUrl]);

  const closeBooking = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') closeBooking();
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('overflow-hidden');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('overflow-hidden');
    };
  }, [closeBooking, isOpen]);

  const value = useMemo(
    () => ({ openBooking, closeBooking, isOpen }),
    [openBooking, closeBooking, isOpen]
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeBooking} url={bookingUrl} />
    </BookingContext.Provider>
  );
}
