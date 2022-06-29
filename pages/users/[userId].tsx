import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { getUserById, User } from '../../util/database';

type props = {
  user?: User;
};

export default function UserDetail(props: props) {

  if(!props.user) {
    return (
    <>
    <Head>
          <title>User not found</title>
          <meta name="description" content="User not found" />
        </Head>
        <h1>404 - User not found</h1>
        Better luck next time

        </>
  );
  }

  return (
    <div>
      <Head>
        <title>User</title>
        <meta name="description" content="About the app" />
      </Head>

      <main>
        <h1>User</h1>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const userIdFromUrl = context.query.userId;

if(!userIdFromUrl || Array.isArray(userIdFromUrl)) {
  return {props: {} };
}

  const user = await getUserById(parseInt(userIdFromUrl));

console.log(user);

if(!user) {
context.res.statusCode = 404;
return   {props: {} };
}

  return {
    props: {
    user: user,
}
  }
}