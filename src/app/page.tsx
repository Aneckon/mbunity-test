import { Footer, Form, Header, Info } from '@/components';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.home}>
      <Header />

      <div className={styles.home__contact}>
        <div className="container">
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>Any question or remarks? Just write us a message!</p>

          <div className={styles.home__content}>
            <Info />
            <Form />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
