import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <nav>
        <div className="name">
          About <Link href="/">NafrielRamadhan.</Link>
        </div>
        <div className="navbar-button">
          <Link href="/about">ABOUT</Link>
          <Link href="/work">WORK</Link>
          <Link href="/contact">CONTACT</Link>
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
