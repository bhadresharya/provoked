'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Scripts() {
  useEffect(() => {
    AOS.init({
      offset: 25,
      easing: 'ease-out',
      debounceDelay: 50,
      throttleDelay: 99,
    });
  }, []);

  return (
    <>
      {/* GA4 should be wired via this GTM container to avoid double page views. */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PRWCNSKP');
        `}
      </Script>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-PRWCNSKP" 
          height="0" 
          width="0"
          style={{display:'none',visibility:'hidden'}}
        />
      </noscript>
    </>
  );
}

