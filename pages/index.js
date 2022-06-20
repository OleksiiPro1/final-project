/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import VideoComponent from './component/VideoComponent.js';

const buttonPlanet = css`
  position: relative;
  left: 45%;
  transform: translate(-50%, 0);
  margin-top: 30px;
  background-color: #29293a;
  color: white;
  padding: 15px 32px;
  border-radius: 4px;
  transition: all .3s;
`;
const divOfPlanet = css`
  margin-left: -100px;
  transition: all .3s;
`;
const ulPlanets3 = css`
  margin-left: 130px;
  margin-top: -190px;
`;
const ulPlanets4 = css`
  margin-left: 130px;
  margin-top: -195px;
`;
const ulPlanets = css`
  margin-left: 130px;
  margin-top: -180px;
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
  background-color: black;
  margin: 50px;
  padding-left: 50px;
  border: 2px solid white;
`;
const planet2Div = css`
  width: 400px;
  height: 400px;
  color: white;
  float: left;
  background-color: black;
  margin: 50px;
  padding-left: 50px;
  border: 2px solid white;
`;
const planet3Div = css`
  width: 400px;
  height: 400px;
  color: white;
  float: left;
  background-color: black;
  margin: 50px;
  padding-left: 50px;
  border: 2px solid white;
`;
const planet4Div = css`
  width: 400px;
  height: 400px;
  color: white;
  float: left;
  background-color: black;
  margin: 50px;
  padding-left: 50px;
  border: 2px solid white;
`;
const main2Text = css`
  margin-top: 250px;
  margin-left: 50px;
  color: white;
  font-size: 10pt;
  margin-bottom: 250px;
`;
const mainText = css`
  margin-top: -750px;
  margin-left: 650px;
  color: white;
  font-size: 12pt;
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
                  class="grow"
                />
              </div>
              <div css={ulPlanets}>
                <h2>HTML planet</h2>
                <ul>
                  <li>Age: 12+</li>
                  <li>Level: 1</li>
                  <li>Difficulty: 20%</li>
                  <li>Travel time: 1 month</li>
                  <li>Admission: level 2</li>
                  <li>Start: September 2022</li>
                </ul>
              </div>
              <Link href="/courses/1"><button className="buttonColor" css={buttonPlanet}>
                LEARN MORE
              </button></Link>
            </div>
            <div css={planet2Div}>
              <div css={divOfPlanet}>
                <Image
                  src="/css-planet.png"
                  alt="css-planet"
                  width="203px"
                  height="200px"
                  class="grow"
                />
              </div>
              <div css={ulPlanets}>
                <h2>CSS planet</h2>
                <ul>
                  <li>Age: 12+</li>
                  <li>Level: 2</li>
                  <li>Difficulty: 50%</li>
                  <li>Travel time: 2 month</li>
                  <li>Admission: level 3</li>
                  <li>Start: October 2022</li>
                </ul>
              </div>
              <Link href="/courses/2"><button className="buttonColor" css={buttonPlanet}>
                LEARN MORE
              </button></Link>
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
                  class="grow"
                />
              </div>
              <div css={ulPlanets3}>
                <h2>JavaScript planet</h2>
                <ul>
                  <li>Level: 3</li>
                  <li>Difficulty: 99%</li>
                  <li>Travel time: 4 month</li>
                  <li>Admission: all levels </li>
                  <li>Start: December 2022</li>
                </ul>
              </div>
              <Link href="/courses/3"><button className="buttonColor" css={buttonPlanet}>
                LEARN MORE
              </button></Link>
            </div>
            <div css={planet4Div}>
              <div css={divOfPlanet}>
                <Image
                  src="/react-planet.png"
                  alt="react-planet"
                  width="228px"
                  height="233px"
                  class="grow"
                />
              </div>
              <div css={ulPlanets4}>
                <h2>React planet</h2>
                <ul>
                  <li>Level: 4</li>
                  <li>Difficulty: 80%</li>
                  <li>Travel time: 3 month</li>
                  <li>Admission: all levels</li>
                  <li>Start: April 2023</li>
                </ul>
              </div>
              <Link href="/courses/4"><button className="buttonColor" css={buttonPlanet}>
                LEARN MORE
              </button></Link>
            </div>
          </div>
        </main>

    </div>
  );
}
