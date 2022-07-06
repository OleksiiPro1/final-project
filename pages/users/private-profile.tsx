import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getUserByValidSessionToken, User } from '../../util/database';

const picStyle = css`
  right: 0px;
  position: fixed;
  padding-top: 100px;
`;
const mainHeightStyle = css`
  min-height: 100vh;
  color: white;
  margin-left: 60px;
  margin-right: 60px;
  padding-top: 80px;
`;

type props = {
  user?: User;
};

export default function UserDetail(props: props) {
  if (!props.user) {
    return (
      <>
        <Head>
          <title>User not found</title>
          <meta name="description" content="User not found" />
        </Head>
        <h1>404 - User not found</h1>
        Better luck next time
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }

  return (
    <div css={mainHeightStyle}>
      <Head>
        <title>{props.user.username}</title>
        <meta name="description" content="About the app" />
      </Head>
      <div>
        <main>
          <div css={picStyle}>
            <Image

              src="/profile_cosmo_cat.png"
              alt="spaceship"
              width="457px"
              height="466px"
            />
          </div>
          <h1>
            {' '}
            {/* User #{props.user.id} */}
            Hello {props.user.username}
          </h1>
          {/* <div>id: {props.user.id}</div> */}
          {/* <div>username: {props.user.username}</div> */}

          <h2>
            We have important information for you that is updated regularly.
          </h2>
          <br />
          <h2>Preparation for the main course</h2>
          <br />
          <h3>Preparing for HTML</h3>
          <p>Websites which help you:</p>
          <ul>
            <li>
              <Link href="https://developer.mozilla.org/ru/docs/Web/HTML">
                developer.mozilla.org
              </Link>
              <br />
            </li>
            <li>
              <Link href="https://www.w3schools.com/html/">www.w3schools</Link>
              <br />
            </li>
            <li>
              <Link href="https://html.com/">html.com</Link>
              <br />
            </li>
          </ul>
          <hr />
          <h3>Preparing for CSS</h3>
          <p>Websites which help you:</p>
          <ul>
            <li>
              <Link href="https://developer.mozilla.org/ru/docs/Web/HTML">
                developer.mozilla.org
              </Link>
              <br />
            </li>
            <li>
              <Link href="https://www.w3schools.com/html/">www.w3schools</Link>
              <br />
            </li>
            <li>
              <Link href="https://html.com/">html.com</Link>
              <br />
            </li>
          </ul>
          <br />
          <hr />
          <h3>Preparing for JS</h3>
          <p>Websites which help you:</p>
          <ul>
            <li>
              <Link href="https://developer.mozilla.org/ru/docs/Web/HTML">
                developer.mozilla.org
              </Link>
              <br />
            </li>
            <li>
              <Link href="https://www.w3schools.com/html/">www.w3schools</Link>
              <br />
            </li>
            <li>
              <Link href="https://html.com/">html.com</Link>
              <br />
            </li>
          </ul>
          <br />
          <hr />
          <h3>Preparing for React</h3>
          <p>Websites which help you:</p>
          <ul>
            <li>
              <Link href="https://developer.mozilla.org/ru/docs/Web/HTML">
                developer.mozilla.org
              </Link>
              <br />
            </li>
            <li>
              <Link href="https://www.w3schools.com/html/">www.w3schools</Link>
              <br />
            </li>
            <li>
              <Link href="https://html.com/">html.com</Link>
              <br />
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const user = await getUserByValidSessionToken(
    context.req.cookies.sessionToken,
  );

  if (user) {
    return {
      props: {
        user: user,
      },
    };
  }

  return {
    redirect: {
      destination: '/login?returnTo=/users/private-profile',
      permanent: false,
    },
  };
}
