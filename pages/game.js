/* eslint-disable jsx-a11y/no-static-element-interactions */
import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';

// const rocetStyle = css`
//   transform: rotate(90deg);
//   padding: 10px;
//   position: relative;
// `;

const mainUnitStyle = css`
z-index: 6;
`;
const unitStyle = css`
z-index: 6;
`;
const bgStyle = css`
background-color: black;
text-align: center;
`;
const gameStyle = css`

min-width: 100%;
margin-top: 60px;

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

const circle = css``;

export default function Game() {
  const [keyPressed, setKeyPressed] = useState(false);

  return (
    <div css={bgStyle} onClick={() => {
      setKeyPressed(true);
      setTimeout(() => setKeyPressed(false), 2000);
    }}>
      <div css={gameStyle2}>
        <Image
          src="/space-bg.gif"
          width="820px"
          height="461px"
          alt="courses"

        />
      </div>
    <div css={gameStyle}>
        <Image
          src="/psp-2000.png"
          width="1300px"
          height="623px"
          alt="courses"
        />
      </div>
    <div
      css={mainStyle}
      onClick={() => {
        setKeyPressed(true);
        setTimeout(() => setKeyPressed(false), 2000);
      }}
    >

      <div  css={mainUnitStyle} className={`circle ${keyPressed ? 'jump1' : ''}`} css={circle} />
      <div css={unitStyle} id="vrag1" />
      <div css={unitStyle} id="meteor" />
      <div css={unitStyle} id="rocket" />
      <div css={unitStyle} id="main-nlo" />
      <div css={unitStyle} id="dim-nlo" />

    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}
