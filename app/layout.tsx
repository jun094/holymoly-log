import Header from 'ui/Header';
import Navigation from 'ui/Navigation';
import PageLayout from 'ui/PageLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <PageLayout>
          <Header />
          <Navigation />

          {children}
        </PageLayout>
      </body>
    </html>
  );
}
