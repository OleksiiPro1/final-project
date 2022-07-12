/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import VideoComponent from './component/VideoComponent.js';

const main3Text = css`
  margin-left: 100px;
  margin-right: 100px;
  color: white;
`;
const main4Text = css`
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 50px;
  color: white;
`;
const buttonPlanet = css`
  cursor: pointer;
  position: relative;
  left: 45%;
  transform: translate(-50%, 0);
  margin-top: 30px;
  background-color: #29293a;
  color: white;
  padding: 15px 32px;
  border-radius: 4px;
  transition: all 0.3s;
`;
const divOfPlanet = css`
  margin-left: -100px;
  transition: all 0.3s;
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
  margin-top: -700px;
  text-align: right;
  margin-right: 60px;
  color: white;
  font-size: 12pt;
  max-width: 1920px;

`;
const imgContainer2 = css`
  position: absolute;
  top: 335px;
  left: 80%;
  transform: translate(-50%, -59%);
  animation: animate 4s infinite ease-in-out;
  width: 350px;
  max-width: 1200px;
`;
const imgContainer = css`
  position: absolute;
  top: 250px;
  left: 20%;
  transform: translate(-50%, -55%);
  animation: animate 5s infinite ease-in-out;
  width: 500px;
  max-width: 1200px;
`;
const mainContentDiv = css`
  padding-top: 40px;
  

  @keyframes animate {
    50% {
      transform: translate(-50%, -48%);
    }
    100% {
    }
  }
`;
export default function Home(props) {
  useEffect(() => {
    props
      .refreshUserProfile()
      .catch(() => console.log('refresh user profile Failed'));
  }, [props]);
  return (
    <div>
      <Head>
        <title>Mission React</title>

        <meta name="description" content="Mission React - mission-react.com" />
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
        <div css={main3Text}>
          <p>
            Every front-end developer starts their journey with HTML and CSS. So
            before you start learning to react you should have a good command of
            writing HTML and CSS. You should know how to write semantic HTML
            tags, how to write CSS selectors, how to use classes, how to
            implement a CSS reset, box model, how to reset to border-box,
            flexbox, how to write responsive web applications including media
            queries, and how to build a frontend application using HTML and CSS.
          </p>
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
            <Link href="/courses/1">
              <button className="buttonColor" css={buttonPlanet}>
                LEARN MORE
              </button>
            </Link>
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
            <Link href="/courses/2">
              <button className="buttonColor" css={buttonPlanet}>
                LEARN MORE
              </button>
            </Link>
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
            <Link href="/courses/3">
              <button className="buttonColor" css={buttonPlanet}>
                LEARN MORE
              </button>
            </Link>
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
            <Link href="/courses/4">
              <button className="buttonColor" css={buttonPlanet}>
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
        <div css={main4Text}>
          <p>
            No matter what… you can’t get better at React if your javascript
            fundamental is not clear. During the interviews, it is one of the
            essential skills to learn before moving to react. Javascript is one
            of the most confusing languages for developers and it ignores small
            errors that can create a problem in your project if you won’t notice
            them earlier. So make sure that you first clear your basic concept
            about javascript and then you move to the advanced version of
            ECMAScript5 and ECMAScript6. Some of the topics are given below but
            make sure that you explore as much as you can and build some
            projects as well for in-depth knowledge in javascript.
          </p>
        </div>
      </main>
    </div>
  );
}
