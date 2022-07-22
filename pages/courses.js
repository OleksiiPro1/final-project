/** @jsxImportSource @emotion/react */

import Head from 'next/head';
import { getCourses } from '../util/database';

export default function Courses(props) {
  return (
    <div>
      <Head>
        <title>Mission React</title>

        <meta name="description" content="Mission React - mission-react.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Courses</h1>
      <div>
        {props.mission.map((mission) => {
          return (
            <div key={` mission-${mission.id}`}>
              <div>planet: {mission.planet}</div>
              <div>price: {mission.price}</div>
              <div>description: {mission.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const courses = await getCourses();
  return {
    props: {
      mission: courses,
    },
  };
}
