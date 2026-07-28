import { Manrope } from 'next/font/google';
import Scripts from '@/components/Scripts';
import BookingProvider from '@/components/daas/BookingProvider';
import '@/styles/globals.scss';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Provoked Pixels — Provoked Monthly Club',
  description:
    'Provoked Monthly Club: flat ₹49,990/month design subscription for founders and growing businesses. Pitch decks, product UI, campaigns, and event visuals in 24–48 hours. Pause anytime.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Scripts />
        <BookingProvider>{children}</BookingProvider>
        <div className="bd-brd"></div>
      </body>
    </html>
  );
}
