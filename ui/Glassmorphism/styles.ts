import styled from '@emotion/styled';
import { COLORS } from 'styles/index';

export const CommonStyle = styled.div`
  border-radius: 14px;
`;

export const GlassContainerStyle = styled(CommonStyle)`
  background-color: ${COLORS.basic.themeBg};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  height: 100%;
`;

export const GlassContentsStyle = styled(CommonStyle)`
  background-color: ${COLORS.basic.contentsBg};
  border: 1px solid ${COLORS.basic.themeBg};
`;
