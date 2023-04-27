'use client';

import { HeaderStyle } from './styles';

type HeaderProps = {};

function Header({}: HeaderProps) {
  return (
    <HeaderStyle as="header" alignItems="center">
      <h6>holoymoly-log</h6>
    </HeaderStyle>
  );
}

export default Header;
