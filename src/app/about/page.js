export default function AboutPage() {
  return (
    <>
      <nav>
        <div className="name">
          About <a href="/">NafrielRamadhan.</a>
        </div>
        <div className="navbar-button">
          <a href="/about">ABOUT</a>
          <a href="/work">WORK</a>
          <a href="/contact">CONTACT</a>
        </div>
      </nav>

      <div className="container">
        <main>
          <div className="progress">
            <h1>
              This page is still on <br />
              <gradient-underline>progress</gradient-underline>.
            </h1>
          </div>
        </main>
      </div>

      {/* gradient ball */}
      <div className="absolute">
        <div className="gradient-circle"></div>
      </div>
    </>
  );
}
