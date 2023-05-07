import Image from 'next/image';
import { Inter } from '@next/font/google';
import PageLayout from 'ui/PageLayout';
import { GlassContainer, GlassContents } from 'ui/Glassmorphism';

import markdownUtils from '../utils/markdownUtils';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const result = markdownUtils.convertMarkdownToJson('./contents/test.md');
  const contents = markdownUtils.contentsToArray(result.content);

  console.log('result', result, typeof result.content);
  console.log('contents', contents);

  return (
    <main>
      <GlassContainer>
        <GlassContents>리스트 1</GlassContents>
      </GlassContainer>
    </main>
  );
}
