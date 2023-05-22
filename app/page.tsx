import PageLayout from 'ui/PageLayout';
import { GlassContainer, GlassContents } from 'ui/Glassmorphism';

import { getAllContents } from '../utils/markdownUtils';

export default function Home() {
  const res = getAllContents();

  return (
    <main>
      <GlassContainer>
        <GlassContents>리스트 1</GlassContents>

        {res.map(({ title }: { title: string }) => (
          <h1 style={{ marginBottom: '1rem', fontSize: '2rem' }} key={title}>
            {title}
          </h1>
        ))}
      </GlassContainer>
    </main>
  );
}
