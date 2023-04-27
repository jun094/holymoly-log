'use client';

import { GlassContentsStyle } from './styles';

function GlassContents({ children }: { children: React.ReactNode }) {
  return <GlassContentsStyle>{children}</GlassContentsStyle>;
}

export default GlassContents;
