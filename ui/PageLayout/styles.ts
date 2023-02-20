import styled from '@emotion/styled';
import { FlexStyle } from 'ui/Flex/styles';
import { GlassContainerStyle } from 'ui/Glassmorphism/styles';

export const MainContainer = styled(FlexStyle)`
  width: 100%;
  min-height: 100vh;
  padding: 32px;
`;

export const BgVideoContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
export const BgVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Wrapper = styled(GlassContainerStyle)`
  width: 100%;
  max-width: 1250px;
  max-height: 860px;
  height: 90vh;

  overflow: hidden;
  position: relative;
`;
