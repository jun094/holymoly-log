import { css } from '@emotion/react';
import { Inter } from '@next/font/google';
import { COLORS } from './styles';

export const style = css`
  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    color: ${COLORS.basic.themeColor};
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 16px;
    font-weight: normal;
    margin: 0;
  }

  ul,
  ol,
  li,
  a,
  input,
  select,
  textarea {
    margin: 0;
    padding: 0;
    border: 0 none;
  }
  ul,
  ol,
  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
