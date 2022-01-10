import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 data-cy="homePageTitle" className="title">
              Welcome
            </h1>
            <p className="description">
              I am Junior Fullstack Web Developer in the making.
            </p>

            <Link href="/contact">
              <a className="cta">Contact Me</a>
            </Link>
          </div>

          <div className="image-wrapper"></div>
          <img
            src="/PlantFace.png"
            className="portfolio-image"
            width={350}
            height={400}
          />
        </div>
      </section>
    </>
  );
}

export default Home;
