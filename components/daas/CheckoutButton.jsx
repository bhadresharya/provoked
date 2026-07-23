'use client';

const CHECKOUT_URLS = {
  NEXT_PUBLIC_CHECKOUT_URL: process.env.NEXT_PUBLIC_CHECKOUT_URL || '',
};

export default function CheckoutButton({ label, envKey, featured = false }) {
  const url = CHECKOUT_URLS[envKey] || '';

  const className = featured
    ? 'btn btn-primary daas-btn w-100'
    : 'btn btn-dark daas-btn w-100';

  if (!url) {
    return (
      <a href="mailto:hello@provoked.in?subject=Subscribe%20inquiry" className={className}>
        {label}
      </a>
    );
  }

  return (
    <a href={url} className={className} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
