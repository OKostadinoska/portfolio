import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              If you have an interesting idea and want to collaborate you can
              reach me through:
            </p>
            <ul className="contact-links">
              <li className="contact-item">
                Email: oliverakostadinoska@gmail.com
              </li>
              <li className="contact-item">
                <Link href="https://github.com/OKostadinoska">
                  <a>Github</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
