import styled from '@emotion/styled';
import { FlexStyle } from 'ui/Flex/styles';

export const NavigationList = styled(FlexStyle)`
  a {
    padding: 20px 30px;
    text-decoration: none;
    color: var(--inactive-color);
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    @media screen and (max-width: 610px) {
      &:not(.main-header-link) {
        display: none;
      }
    }
    &.is-active,
    &:hover {
      color: var(--theme-color);
      border-bottom: 2px solid var(--theme-color);
    }
  }
`;
export const NavigationItem = styled(FlexStyle)``;
