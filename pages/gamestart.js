/* eslint-disable jsx-a11y/no-static-element-interactions */
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const bgStyle = css`
  background-color: black;
  text-align: center;
`;
const gameStyle = css`
  cursor: crosshair;
  min-width: 100%;
  // margin-top: 60px;
  color: white;
  padding-top: 60px;
  position: relative;
  z-index: 7;
`;

export default function Game() {
  return (
    <div css={bgStyle}>
      <div css={gameStyle}>
        <Link href="/game">
          <Image
            src="/psp-2000start.png"
            width="1600px"
            height="700px"
            alt="courses"
          />
        </Link>
      </div>
    </div>
  );
}
