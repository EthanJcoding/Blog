import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  console.log(styles.main);
  return (
    <>
      <Head>
        <title>J-Log</title>
        <meta name="description" content="Junil's 프론트엔드 컴포넌트 모음" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.grid}>
          <h1 className={inter.className}>안녕하세용가리</h1>
          <h2>Helloooo</h2>
        </header>
      </main>
    </>
  );
}
