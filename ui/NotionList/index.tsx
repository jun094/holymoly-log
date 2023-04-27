'use client';

import { GlassContainer, GlassContents } from 'ui/Glassmorphism';

type NotionListProps = {};

function NotionList({}: NotionListProps) {
  return (
    <GlassContainer>
      <GlassContents>
        <h6>list 1</h6>
      </GlassContents>
      <GlassContents>
        <h6>list 1</h6>
      </GlassContents>
      <GlassContents>
        <h6>list 1</h6>
      </GlassContents>
      <GlassContents>
        <h6>list 1</h6>
      </GlassContents>
    </GlassContainer>
  );
}

export default NotionList;
