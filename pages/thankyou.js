import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const mainCss = css`
padding: 80px;
color: white;
text-align: center;
margin-top: -280px;
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
            src="/thankyou3.png"
            alt="spaceship"
            width="1366px"
            height="415px"
          />
      <main css={mainCss}>

        <h1>Thank you for your order!</h1>

        <button>
          <Link href="/">Main Page</Link>
        </button>
      </main>
    </div>
  );
}