/* eslint-disable jsx-a11y/no-static-element-interactions */
import { css } from '@emotion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
  const [circleCords, setCircleCords] = useState({ x: 350, y: 250 });
  const [enemyCords, setEnemyCords] = useState({ x: 970, y: 250 });
  const [count, setCount] = useState(0);
  const [keyPressed, setKeyPressed] = useState(false);
  useEffect(() => {
    let x = 970;
    setInterval(() => {
      if (x < 0) {
        x = 970;
      }
      x -= 10;
      console.log(enemyCords);
      setEnemyCords({ ...enemyCords, x });
    }, 25);
  }, []);
  useEffect(() => {
    if (
      Math.abs(enemyCords.x - circleCords.x) < 120 &&
      circleCords.y === enemyCords.y
    ) {
      alert('Game over!');
      setEnemyCords({ x: 970, y: 250 });
    }
  }, [enemyCords.x]);
  const jump = () => {
    const jumpCords = [
      { x: 350, y: 250 },
      { x: 350, y: 190 },
      { x: 350, y: 150 },
      { x: 350, y: 190 },
      { x: 350, y: 250 },
    ];
    setCircleCords(jumpCords[0]);
    let i = 1;
    const Interval = setInterval(() => {
      setCircleCords(jumpCords[i]);
      i++;
      if (i === jumpCords.length) {
        clearInterval(Interval);
      }
    }, 400);
  };
  const boardClick = () => {
    jump();
    setCount(count + 1);
  };

  return (
    <div css={bgStyle} onClick={boardClick}>
      <div css={gameStyle2}>
        {/* <Image src="/space-bg.gif" width="820px" height="461px" alt="courses" /> */}
      </div>
      <div css={gameStyle}>
        {/* <Image
          src="/psp-2000.png"
          width="1600px"
          height="700px"
          alt="courses"
        /> */}
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
          style={{ left: circleCords.x, top: circleCords.y }}
          css={mainUnitStyle}
          className={'circle'}
        />
        <div
          style={{ left: enemyCords.x, top: enemyCords.y }}
          css={unitStyle2}
          id="enemy"
        />
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
