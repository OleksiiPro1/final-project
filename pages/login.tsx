import Head from 'next/head';
import { useState } from 'react';
import { LoginResponseBody } from './api/login';
import { errorStyles } from './register';

export default function About() {
  const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState<
{
message: string;
      }[]
>([]);



async function loginHundler() {
  const loginResponse = await fetch('/api/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json',

  },
  body: JSON.stringify({
    username: username,
    password: password,
  })
  })
  const loginResponseBody: LoginResponseBody = await loginResponse.json();

console.log(loginResponseBody);

if ('errors' in loginResponseBody) {
  setErrors(loginResponseBody.errors);
  return;
}

// await router.push('/');

}


  return (

<main>
<div>
      <Head>
        <title>Login</title>
        <meta name="Login" content="Login" />
      </Head>

  <main>
        <h1>Login</h1>

      <label>
        Username: <input value={username} onChange={(event) => {setUsername(event.currentTarget.value)}} />
      </label>
      <label>
        Password: <input value={password} onChange={(event) => {setPassword(event.currentTarget.value)}} />
      </label>
      <button onClick={() => loginHundler()}>Login</button>

    {errors.length && errors.map((error) => (
    <span css={errorStyles} key={`error${error.message}`}>{error.message}</span> ))
    }

  </main>
    </div>
</main>

  );
}