import { css } from '@emotion/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RegisterResponseBody } from './api/register';

const mainStyle = css`
min-height: 100vh;
`;
export const errorStyles = css`
background-color: yellow;
margin-left: 10px;


`;
export default function About() {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState<
{
message: string;
      }[]
>([]);

const router = useRouter()

async function registerHundler() {
  const registerResponse = await fetch('/api/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json',

  },
  body: JSON.stringify({
    username: username,
    password: password,
  })
  })
  const registerResponseBody: RegisterResponseBody = await registerResponse.json();

console.log(registerResponseBody);

if ('errors' in registerResponseBody) {
  setErrors(registerResponseBody.errors);
  return;
}

await router.push('/cart');
// await router.push('/users/${registerResponseBody.user.id}');

}

  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="description" content="About the app" />
      </Head>

      <main  css={mainStyle}>
        <h1>Register</h1>

      <label>
        Username: <input value={username} onChange={(event) => {setUsername(event.currentTarget.value)}} />
      </label>
      <label>
        Password: <input value={password} onChange={(event) => {setPassword(event.currentTarget.value)}} />
      </label>
      <button onClick={() => registerHundler()}>Register</button>

    {errors.map((error) => (
    <span css={errorStyles} key={`error${error.message}`}>{error.message}</span> ))
    }

      </main>
    </div>
  );
}