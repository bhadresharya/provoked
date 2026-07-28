const RAZORPAY_BLUE = '#072654';

function RazorpayMark({ className = '' }) {
  return (
    <span className={`daas-payment-trust__mark ${className}`.trim()} aria-hidden="true">
      <svg
        className="daas-payment-trust__logo"
        viewBox="0 0 80 20"
        width="72"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        <text
          x="0"
          y="15"
          fill={RAZORPAY_BLUE}
          fontFamily="Manrope, Helvetica, Arial, sans-serif"
          fontSize="14"
          fontWeight="700"
          letterSpacing="-0.02em"
        >
          Razorpay
        </text>
      </svg>
    </span>
  );
}

export default function PaymentTrustNote({ tone = 'light' }) {
  return (
    <p className={`daas-payment-trust daas-payment-trust--${tone}`}>
      <span className="daas-payment-trust__text">
        Secure payment link via
      </span>
      <RazorpayMark />
      <span className="daas-payment-trust__methods">UPI / cards / netbanking</span>
    </p>
  );
}
