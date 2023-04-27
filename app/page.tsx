import Image from 'next/image';
import { Inter } from '@next/font/google';
import PageLayout from 'ui/PageLayout';
import { GlassContainer, GlassContents } from 'ui/Glassmorphism';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <GlassContainer>
        <GlassContents>리스트 1</GlassContents>
      </GlassContainer>
    </main>
  );
}
