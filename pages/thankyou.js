import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thank You</title>
        <meta name="description" content="Thank you for your order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Do i want to make /home a landing page?*/}
      <main >
        <h1>Thank you for your order!</h1>
        
        <button>
          <Link href="/">Main Page</Link>
        </button>
      </main>
    </div>
  );
}