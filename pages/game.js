/* eslint-disable jsx-a11y/no-static-element-interactions */
import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';

// const rocetStyle = css`
//   transform: rotate(90deg);
//   padding: 10px;
//   position: relative;
// `;
const mainStyle = css`
  color: white;
  padding: 100px;
`;

const circle = css``;

export default function Game() {
  const [keyPressed, setKeyPressed] = useState(false);



  return (
    <div
      css={mainStyle}
      onClick={() => {
        setKeyPressed(true);
      }}
    >
      <h1> hello world </h1>
      <div className={`circle ${keyPressed ? 'jump1' : ''}`} css={circle} />

      <div id="meteor" />
      <div id="rocket" />
    </div>





  );
}
