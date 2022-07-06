import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { getCourses } from '../util/database';
import VideoComponent from './component/VideoComponentCart';

const allPageCss = css`
padding-top: 90px;
`;
const allPics = css`
margin-left: -160px;
`;
const allText = css`
  color: white;
  list-style-type: none;
  margin-right: 60px;

`;

const mainH1 = css`
  z-index: 1;
  position: absolute;
  margin-top: -435px;
  margin-left: 60px;
  color: white;
`;
const mainVideoDiv = css`
  margin-top: -450px;
  margin-left: 200px;
  z-index: -1;
`;

export default function CoursesList(props) {
  useEffect(() => {
    const currentCart = Cookies.get('cart')
      ? JSON.parse(Cookies.get('cart'))
      : [];
    console.log(currentCart);
  }, []);

  return (
    <div>
      <Head>
        <title>Mission React</title>

        <meta name="description" content="Mission React - mission-react.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div css={allPageCss}>
      <div>
        <Image
          src="/welcome on board2.png"
          width="1549px"
          height="484px"
          alt="courses"
        />
      </div>
      <div css={mainVideoDiv}>
        <VideoComponent />
      </div>
      <div css={mainH1}>
        <h1>Welcome on board!</h1>
      </div>

      <ul css={allText}>
        {' '}
        {props.courses.map((course) => {
          return (
            <div key={`course-${course.id}`}>
              <li css={allPics}>
                <Image
                  src={`/${course.id}.png`}
                  width="300px"
                  height="300px"
                  alt="courses"
                />
              </li>
              <li>Course: {course.planet}</li>
              <li>Prise: {course.price}$</li>
              <li>Description: {course.description}</li>
              <li>Quantity: {course.quantity}</li>

              <br /><hr /><br />
            </div>
          );
        })}
      </ul>

    </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const courses = await getCourses() ;
    console.log(courses);
  const currentCarts = JSON.parse(context.req.cookies.cart || '[]');
 const courseInCart = currentCarts.map((item) => {
    const itemFound = courses.find((course) => course.id === item.id);
   return { ...itemFound, quantity: item.quantity || 1 };
   });



   return {
     props: {
       courses: courseInCart,
     },
   };
 }
