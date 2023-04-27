'use client';

import { Global } from '@emotion/react';

import { MainContainer, BgVideoContainer, BgVideo, Wrapper } from './styles';
import { style } from 'styles/globalStyles';

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainContainer alignItems="center" justifyContent="center">
      <Global styles={style} />
      <BgVideoContainer>
        <BgVideo muted autoPlay loop>
          <source
            src="/assets/video/macos-big-sur-1280x720-dark.mp4"
            type="video/mp4"
          />
        </BgVideo>
      </BgVideoContainer>

      <Wrapper>{children}</Wrapper>
    </MainContainer>
  );
}

export default PageLayout;
