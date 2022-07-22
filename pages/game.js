/* eslint-disable jsx-a11y/no-static-element-interactions */
import { css } from '@emotion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// import useSound from 'use-sound';
// import music from '../public/music.mp3';

const score = css`
  margin-top: -600px;
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
  cursor: crosshair;
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
  const [catCords, setCatCords] = useState({ x: 350, y: 250 });
  const [enemyCords, setEnemyCords] = useState({ x: 1070, y: 250 });
  const [count, setCount] = useState(0);
  const [keyPressed, setKeyPressed] = useState(false);
  useEffect(() => {
    let x = 1070;
    setInterval(() => {
      if (x < 0) {
        x = 1070;
      }
      x -= 10;
      // console.log(enemyCords);
      setEnemyCords({ ...enemyCords, x });
    }, 28);
  }, []);
  useEffect(() => {
    if (
      Math.abs(enemyCords.x - catCords.x) < 100 &&
      catCords.y === enemyCords.y
    ) {
      window.location.href = './gamestart';
      alert('Game over!');
      setEnemyCords({ x: 1070, y: 250 });
    }
  }, [enemyCords.x]);
  const jump = () => {
    const jumpCords = [
      { x: 400, y: 250 },
      { x: 400, y: 120 },
      { x: 400, y: 110 },
      { x: 400, y: 120 },
      { x: 400, y: 250 },
      { x: 400, y: 250 },
    ];
    setCatCords(jumpCords[1]);
    let i = 1;
    const Interval = setInterval(() => {
      setCatCords(jumpCords[i]);
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
  // const BoopButton = () => {
  //   const [play] = useSound(music);

  // return <button onClick={play}>Boop!</button>;
  // };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div css={bgStyle} onClick={boardClick}>
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
        // onClick={() => {
        //   setKeyPressed(true);
        //   setTimeout(() => setKeyPressed(false), 2000);
        // }}
      >
        <div
          style={{ left: catCords.x, top: catCords.y }}
          css={mainUnitStyle}
          className={'cat'}
        />
        <div
          style={{ left: enemyCords.x, top: enemyCords.y }}
          css={unitStyle2}
          id="enemy"
        />

        <div css={unitStyle} id="rocket" />
        <div css={unitStyle} id="main-nlo" />
        <div css={unitStyle} id="dim-nlo" />
        <div css={unitStyle} id="star" />
        <div css={unitStyle} id="star2" />
        <div css={unitStyle} id="star3" />
        <div css={unitStyle} id="star4" />
        <div css={unitStyle} id="star5" />
        <div css={unitStyle} id="meteor" />
        <div css={unitStyle} id="bug" />
        <div css={unitStyle} id="game-bug" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
