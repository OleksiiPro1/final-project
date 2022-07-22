import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Tut from '../components/Tut';
import VideoComponent from './component/VideoComponentGame';

const soundStyle = css`
  z-index: 55;
  margin-top: -220px;
  margin-left: 366px;
  position: absolute;
  text-align: center;
`;
const mainVideoDiv = css`
  text-align: center;
  position: absolute;
  width: 1200px;
  height: 600px;
`;
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
      <div css={mainVideoDiv}>
        <VideoComponent />
      </div>

      <div css={gameStyle}>
        <Link href="/game">
          <Image
            src="/psp-2000start.png"
            width="1600px"
            height="700px"
            alt="courses"
          />
        </Link>
        <div css={soundStyle}>
          <Tut />
        </div>
      </div>
    </div>
  );
}
