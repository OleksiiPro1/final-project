import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const styleButton = css`
  cursor: pointer;
  margin: 10px;

  border: 2px solid gray;
  background-color: white;
  color: black;
  padding: 5px;
`;
const imgStyle = css`
  z-index: 1;
`;
const mainCss = css`
  color: white;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin-top: -230px;
  position: absolute;
  z-index: 1;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thank You</title>
        <meta name="description" content="Thank you for your order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Do i want to make /home a landing page?*/}
      <Image
        css={imgStyle}
        src="/thankyou3.png"
        alt="spaceship"
        width="1366px"
        height="415px"
      />
      <main css={mainCss}>
        <h1>Thank you for your order!</h1>

        <button css={styleButton}>
          <Link href="/">Main Page</Link>
        </button>
      </main>
    </div>
  );
}
