import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LegalPage({ title, updated, children }) {
  return (
    <>
      <Header />
      <main className="daas-home daas-legal">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="daas-eyebrow">Legal</p>
              <h1 className="daas-legal__title">{title}</h1>
              {updated ? <p className="daas-legal__updated">Last updated: {updated}</p> : null}
              <div className="daas-legal__body">{children}</div>
              <p className="daas-legal__back">
                <Link href="/">← Back to home</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
