import Head from 'next/head';
import { useState } from 'react';
import { RegisterResponseBody } from './api/register';

export default function About() {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState<
{
message: string;
      }[]
>([]);
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
  setErrors(registerResponseBody.errors)
}

}

  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="description" content="About the app" />
      </Head>

      <main>
        <h1>Register</h1>

      <label>
        Username: <input value={username} onChange={(event) => {setUsername(event.currentTarget.value)}} />
      </label>
      <label>
        Password: <input value={password} onChange={(event) => {setPassword(event.currentTarget.value)}} />
      </label>
      <button onClick={() => registerHundler()}>Register</button>
    {errors.length && errors.map((error) => (
    <span key={`error${error.message}`}>{error.message}</span> ))
    }

      </main>
    </div>
  );
}