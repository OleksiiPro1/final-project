import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import Image from 'next/image';
import VideoComponent from './component/VideoComponentCart.js';

const mainH2 = css`
text-align: center;
color: white;
`;
const mainH1 = css`
text-align: center;
color: white;
`;
const mainVideoDiv = css`
  margin-top: -450px;
  margin-left: 200px;
  z-index: -1;
`;
export default function Courses() {
  return (
    <div>
      <Head>
        <title>Mission React</title>

        <meta name="description" content="Mission React - mission-react.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div  css={mainH1}><h1>Welcome on board!</h1></div>
      <div>
        <Image
          src="/welcome on board2.png"
          width="1549px"
          height="484px"
          alt="courses"
        />
      </div>
      <div css={mainVideoDiv}>
        <VideoComponent />
      </div>
      <div   css={mainH2}><h2>Please add the course</h2></div>
    </div>
  );
}
