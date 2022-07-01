import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RegisterResponseBody } from './api/register';

const mainHeightStyle = css`
min-height: 100vh;
`;
const mainCatStyle = css`

margin-left: -120px;

z-index: -1;
`;
const mainStyle = css`

color: white;
margin-top: -300px;
margin-left: 100px;
position: absolute;
z-index: 3;
`;
export const errorStyles = css`
background-color: #871F78;
margin-left: 10px;
`;

type Props = {
  refreshUserProfile: () => Promise<void>;
};

export default function About(props: Props) {

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
await props.refreshUserProfile();
await router.push('/cart');
// await router.push('/users/${registerResponseBody.user.id}');

}

  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="description" content="About the app" />
      </Head>

      <main css={mainHeightStyle}>

      <div css={mainCatStyle}>
          <Image
            src="/css-planet.png"
            alt="spaceship"
            width="400px"
            height="400px"
          />
          </div>
<div  css={mainStyle}>
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
</div>
      </main>
    </div>
  );
}