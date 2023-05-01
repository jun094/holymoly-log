'use client';

import Link from 'next/link';

import { NavigationList, NavigationItem } from './styles';

type NavigationProps = {};

function Navigation({}: NavigationProps) {
  return (
    <NavigationList as="ul" alignItems="center" justifyContent="center">
      <NavigationItem as="li">
        <Link href={`/`}>
          <h6>HOME</h6>
        </Link>
      </NavigationItem>
      <NavigationItem as="li">
        <Link href={`/ssg`}>
          <h6>SSG</h6>
        </Link>
      </NavigationItem>
      <NavigationItem as="li">
        <Link href={`/isr`}>
          <h6>ISR</h6>
        </Link>
      </NavigationItem>
    </NavigationList>
  );
}

export default Navigation;
