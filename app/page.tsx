import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>next 13을 알아보자.</h1>
      <h2 className={inter.className}>이건 next/font의 inter체이다.</h2>

      <h2>이건 next/image</h2>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
    </main>
  );
}
