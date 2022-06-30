import { css } from '@emotion/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { LoginResponseBody } from './api/login';
import { errorStyles } from './register';

const mainStyle = css`
min-height: 100vh;
`;
export default function login(props) {
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
    <div css={mainStyle}>
      <div>
        <Head>
          <title>Login</title>
          <meta name="Login" content="Login" />
        </Head>

        <main>
          <h1>Login</h1>

          <label>
            Username:{' '}
            <input
              value={username}
              onChange={(event) => {
                setUsername(event.currentTarget.value);
              }}
            />
          </label>
          <label>
            Password:{' '}
            <input
              value={password}
              onChange={(event) => {
                setPassword(event.currentTarget.value);
              }}
            />
          </label>
          <button onClick={() => loginHundler()}>Login</button>

          {/* {errors.length && */}
            {errors.map((error) => (
              <span css={errorStyles} key={`error${error.message}`}>
                {error.message}
              </span>
            ))}
        </main>
      </div>
    </div>
  );
}
