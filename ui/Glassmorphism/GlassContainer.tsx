'use client';

import { GlassContainerStyle } from './styles';

function GlassContainer({ children }: { children: React.ReactNode }) {
  return <GlassContainerStyle>{children}</GlassContainerStyle>;
}

export default GlassContainer;
