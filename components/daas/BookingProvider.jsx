'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import CalendlyModal from '@/components/daas/CalendlyModal';

const BookingContext = createContext({
  openBooking: () => {},
  closeBooking: () => {},
  isOpen: false,
});

export function useBooking() {
  return useContext(BookingContext);
}

export default function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '';

  const openBooking = useCallback(() => {
    if (!calendlyUrl) {
      window.location.href = 'mailto:hello@provoked.in?subject=Intro%20call%20request';
      return;
    }
    setIsOpen(true);
  }, [calendlyUrl]);

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
      <CalendlyModal isOpen={isOpen} onClose={closeBooking} url={calendlyUrl} />
    </BookingContext.Provider>
  );
}
