import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav>
        <div className="name">
          <Link href="/">NafrielRamadhan.</Link>
        </div>
        <div className="navbar-button">
          <Link href="/about">ABOUT</Link>
          <Link href="/work">WORK</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </nav>

      <div className="container">
        <main>
          <div className="description ">
            <h1>
              I&apos;m a <gradient-text>Creative </gradient-text> &{" "}
              <gradient-text>Tech </gradient-text> Enthusiast with a strong
              passion for Education.
            </h1>
          </div>

          <div className="information">
            <div>
              <h3>Web Development</h3>
              <h3>Product</h3>
              <h3>Data</h3>
              <h3>Photography</h3>
              <h3>Design</h3>
              <h3>Branding & Direction</h3>
            </div>

            <div></div>
            <div></div>

            <div>
              <Link
                href="https://maps.app.goo.gl/h7ezd21ZPicK1YJ5A"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jakarta, Indonesia
              </Link>
            </div>

            <div>
              <h3>
                Website is still on <br />
                progress
              </h3>
            </div>
          </div>
        </main>
      </div>

      <footer></footer>
    </>
  );
}
