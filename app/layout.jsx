import Scripts from '@/components/Scripts';
import SmoothScroll from '@/components/SmoothScroll';
import '@/styles/globals.scss';

export const metadata = {
  title: 'Provoked Pixels',
  description: 'We create digital experiences that matter',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Scripts />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <div className="bd-brd"></div>
      </body>
    </html>
  );
}

