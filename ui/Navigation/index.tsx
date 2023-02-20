'use client';

import Link from 'next/link';
import Flex from 'ui/Flex';

import { NavigationList, NavigationItem } from './styles';

type NavigationProps = {};

function Navigation({}: NavigationProps) {
  return (
    <NavigationList as="ul" alignItems='center' justifyContent='center'>
      <NavigationItem as="li">
        <Link href={`/csr`}>
          <h6>CSR</h6>
        </Link>
      </NavigationItem>
      <NavigationItem as="li">
        <Link href={`/ssr`}>
          <h6>SSR</h6>
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
