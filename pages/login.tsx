import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { LoginResponseBody } from './api/login';
import { errorStyles } from './register';

type Props = {
  refreshUserProfile: () => Promise<void>;
};

const mainHeightStyle = css`
min-height: 100vh;
padding-top: 80px;
`;

const mainCatStyle = css`
margin-top: 30px;

z-index: -1;
`;

const mainStyle = css`
min-height: 100vh;
color: white;
margin-top: -300px;
margin-left: 100px;
position: absolute;
z-index: 3;
`;
export default function Login(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<
    {
      message: string;
    }[]
  >([]);

  const router = useRouter();

  async function loginHundler() {
    const loginResponse = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const loginResponseBody: LoginResponseBody = await loginResponse.json();

      if ('errors' in loginResponseBody) {
      setErrors(loginResponseBody.errors);
      return;
    }
      const returnTo = router.query.returnTo
    if (returnTo && !Array.isArray(returnTo) &&
    /^\/[a-zA-Z0-9-?=/]*$/.test(returnTo)
    ) {
      await router.push(returnTo);
    } else {

    await props.refreshUserProfile();

    await router.push(`/`);
    }

  }

  return (
    <div >
      <div>
        <Head>
          <title>Login</title>
          <meta name="Login" content="Login" />
        </Head>

        <main css={mainHeightStyle}>
          <div css={mainCatStyle}>
          <Image
            src="/login_cosmo_cat.png"
            alt="spaceship"
            width="457px"
            height="466px"
          />
          </div>
          <div css={mainStyle}>
          <h1>Login</h1>

          <label>
            Username:{'  '}
            <input
              value={username}
              onChange={(event) => {
                setUsername(event.currentTarget.value);
              }}
            />{'  '}
          </label>
          <label>
            Password:{' '}
            <input type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.currentTarget.value);
              }}
            />{'  '}
          </label>
          <button onClick={() => loginHundler()}>Login</button>

          {/* {errors.length && */}
            {errors.map((error) => (
              <span css={errorStyles} key={`error${error.message}`}>
                {error.message}
              </span>
            ))}
            </div>
        </main>
      </div>
    </div>
  );
}
