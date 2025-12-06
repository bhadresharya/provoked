export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-11 col-lg-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="#">
                <img 
                  src="/images/logo.svg" 
                  className="logo" 
                  alt="Provoked Pixels Logo"
                />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

