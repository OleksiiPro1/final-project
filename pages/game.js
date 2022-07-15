/* eslint-disable jsx-a11y/no-static-element-interactions */
import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';

const score = css`
  margin-top: -590px;
`;
const mainUnitStyle = css`
  z-index: 6;
`;
const unitStyle2 = css`
  z-index: 5;
`;

const unitStyle = css`
  z-index: 5;
`;
const bgStyle = css`
  background-color: black;
  text-align: center;
`;
const gameStyle = css`
  min-width: 100%;
  margin-top: 60px;
  color: white;

  position: absolute;
  z-index: 7;
`;
const gameStyle2 = css`
  min-width: 100%;
  margin-top: 100px;

  position: absolute;
  z-index: 2;
`;
const mainStyle = css`
  color: white;
  padding: 100px;
`;

export default function Game() {
  // const circle = document.getElementById('circle');
  // const enemy = document.getElementById('enemy');
  // let isAlive = setInterval(function () {
  //   console.log(isAlive);
  //   let circleTop = parseInt(
  //     window.getComputedStyle(circle).getPropertyValue('top'),
  //   );
  //   let enemyLeft = parseInt(
  //     window.getComputedStyle(enemy).getPropertyValue('left'),
  //   );
  //   if (enemyLeft < 50 && enemyLeft > 0 && circleTop >= 250) {
  //     alert('Game Over!');
  //   }
  // }, 10);

  const [count, setCount] = useState(0);
  const [keyPressed, setKeyPressed] = useState(false);

  return (
    <div
      css={bgStyle}
      onClick={() => {
        setKeyPressed(true);
        setTimeout(() => setKeyPressed(false), 2000);
      }}
      onClick={() => setCount(count + 1)}
    >
      <div css={gameStyle2}>
        {/* <Image src="/space-bg.gif" width="820px" height="461px" alt="courses" /> */}
      </div>
      <div css={gameStyle}>
        <Image
          src="/psp-2000.png"
          width="1600px"
          height="700px"
          alt="courses"
        />
        <p css={score}>Score: {count}</p>
      </div>
      <div
        css={mainStyle}
        onClick={() => {
          setKeyPressed(true);
          setTimeout(() => setKeyPressed(false), 2000);
        }}
      >
        <div
          css={mainUnitStyle}
          className={`circle ${keyPressed ? 'jump1' : ''}`}
        />
        <div css={unitStyle2} id="enemy" />
        <div css={unitStyle} id="meteor" />
        <div css={unitStyle} id="meteor2" />
        <div css={unitStyle} id="main-nlo" />
        <div css={unitStyle} id="dim-nlo" />
        <div css={unitStyle} id="star" />
        <div css={unitStyle} id="star2" />
        <div css={unitStyle} id="star3" />
        <div css={unitStyle} id="star4" />
        <div css={unitStyle} id="star5" />
      </div>
      <br />
      <br />
    </div>
  );
}
