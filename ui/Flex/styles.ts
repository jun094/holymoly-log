import styled from '@emotion/styled';

import { FlexProps } from './index';

type ContainerType = Omit<FlexProps, 'className' | 'children'>;

export const FlexStyle = styled.div<ContainerType>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
`;
