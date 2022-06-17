/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import VideoComponent from './components/VideoComponent.js';

const main2Text = css`
  margin-top: 250px;
  margin-left: 50px;
  color: white;

`;
const mainText = css`
  margin-top: -750px;
  margin-left: 650px;
  color: white;
  

`;
const imgContainer2 = css`
  position: absolute;
  top: 65%;
  left: 80%;
  transform: translate(-50%, -59%);
  animation: animate 4s infinite ease-in-out;
  width: 350px;
`;
const imgContainer = css`
  position: absolute;
  top: 35%;
  left: 20%;
  transform: translate(-50%, -55%);
  animation: animate 5s infinite ease-in-out;
  width: 500px;
`;
const mainContentDiv = css`
  @keyframes animate {
    50% {
      transform: translate(-50%, -48%);
    }
    100% {
    }
  }
`;
export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Mission React</title>

          <meta
            name="description"
            content="Mission React - mission-react.com"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div css={mainContentDiv}>
            <VideoComponent />
          </div>
          <div css={imgContainer}>
            <Image
              src="/main1.png"
              alt="spaceship"
              width="959px"
              height="459px"
            />
          </div>
          <div css={imgContainer2}>
            <Image
              src="/main1cosmo_cat.png"
              alt="space-cat"
              width="457px"
              height="466px"
            />
          </div>
          <div css={mainText}>
            <h1>Discover new in programming for yourself</h1>
            <h2>Go all the way from HTML to REACT with us</h2>
          </div>
          <div css={main2Text}>
            <h2>Level 1 - HTML planet</h2>
            <h2>Level 2 - CSS planet</h2>
            <h2>Level 3 - JAVASCRIPT planet</h2>
            <h2>Level 4 - REACT planet</h2>
          </div>
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
