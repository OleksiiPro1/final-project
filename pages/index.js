/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import VideoComponent from './components/VideoComponent.js';

const divOfPlanet = css`
  margin-left: -40px;
`;

const divPlanets = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const planet1Div = css`
  width: 400px;
  height: 400px;
  color: white;
  float: left;
  background-color: #1d1d23;
  margin: 30px;
`;
const planet2Div = css`
  width: 400px;
  height: 400px;
  color: white;
  float: left;
  background-color: #1d1d23;
  margin: 30px;
`;
const planet3Div = css`
  width: 400px;
  height: 400px;
  color: white;
  float: left;
  background-color: #1d1d23;
  margin: 30px;
`;
const planet4Div = css`
  width: 400px;
  height: 400px;
  color: white;
  float: left;
  background-color: #1d1d23;
  margin: 30px;
`;
const main2Text = css`
  margin-top: 250px;
  margin-left: 50px;
  color: white;
  font-size: 14pt;
  margin-bottom: 250px;
`;
const mainText = css`
  margin-top: -750px;
  margin-left: 650px;
  color: white;
  font-size: 16pt;
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
              width="229px"
              height="233px"
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
          <div css={divPlanets}>
            <div css={planet1Div}>
              <div css={divOfPlanet}>
            <Image
                src="/html-planet.png"
                alt="css-planet"
                width="200px"
                height="200px"
              /></div>
            </div>
            <div css={planet2Div}>
            <div css={divOfPlanet}><Image
                src="/css-planet.png"
                alt="css-planet"
                width="203px"
                height="200px"
              /></div>
            </div>
          </div>
          <div css={divPlanets}>
            <div css={planet3Div}>
            <div css={divOfPlanet}>
            <Image
                src="/js-planet.png"
                alt="js-planet"
                width="231px"
                height="229px"
              /></div>
            </div>
            <div css={planet4Div}>
            <div css={divOfPlanet}>
            <Image
                src="/react-planet.png"
                alt="react-planet"
                width="228px"
                height="233px"
              /></div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
