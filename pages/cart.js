import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { setStringifiedCookie } from '../util/cookies';
import { getCourses, getUserByValidSessionToken } from '../util/database';
import VideoComponent from './component/VideoComponentCart';

const sumStyle = css`
  color: white;
  margin: 60px;

  text-align: center;
`;
const styleButton = css`
  text-align: center;
  margin-bottom: 20px;
  margin-top: -20px;
`;
const styleButtons = css`
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid gray;
  background-color: white;
  color: black;
  padding: 8px;
`;
const allPageCss = css`
  padding-top: 90px;
`;
const allPics = css`
  margin-left: -90px;
`;
const allText = css`
  color: white;
  list-style-type: none;
  margin-right: 60px;
`;

const mainH1 = css`
  z-index: 1;
  position: absolute;
  margin-top: -506px;
  margin-left: 60px;
  color: white;
`;
const mainVideoDiv = css`
  text-align: center;
  max-width: 100%;
  height: auto;
  margin-top: -620px;

  z-index: -1;
`;

export default function CoursesList(props) {
  // console.log(props, 'this is props');
  const [coursesInCart, setCoursesInCart] = useState(props.courses);

  useEffect(() => {
    Cookies.set('courses', JSON.stringify(coursesInCart));
  }, []);

  const handleRemove = (courseId) => {
    const filteredCourses = coursesInCart.filter(
      (course) => course.id !== courseId,
    );
    setStringifiedCookie('cart', filteredCourses);
    setCoursesInCart(filteredCourses);
    console.log('coursesInCart log', coursesInCart);
  };

  const totalPrice = coursesInCart.reduce(
    (sum, item) => sum + Number(item.price),
    0,
  );

  // async function handlePurchase() {
  //   const response = await fetch("/api/session,", {
  //     method: "POST",
  //   });
  //   const data = await response.json();

  //   console.log(data);
  // }

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
            width="2014px"
            height="629px"
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
          {coursesInCart.map((course) => {
            return (
              <div key={`course-${course.id}`}>
                <li css={allPics}>
                  <Image
                    src={`/${course.id}.png`}
                    width="150px"
                    height="150px"
                    alt="courses"
                  />
                </li>
                <li>Course: {course.planet}</li>
                <li>Price: {course.price}$</li>
                <li>Description: {course.description}</li>
                <li>Quantity: {course.quantity}</li>

                <button
                  css={styleButtons}
                  type="button"
                  onClick={() => {
                    handleRemove(course.id);
                  }}
                >
                  Remove from cart
                </button>
                <br />
                <hr />
                <br />
              </div>
            );
          })}
        </ul>
      </div>
      <div css={styleButton}>
        <h3 css={sumStyle}>Total price: ${totalPrice}</h3>
        <button
          // onClick={() => handlePurchase()}
          css={styleButtons}
          data-test-id="checkout-confirm-order"
          className="checkoutConfirm"
        >
          <Link href="/checkout">Checkout </Link>
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const courses = await getCourses();
  const currentCarts = JSON.parse(context.req.cookies.cart || '[]');
  const courseInCart = currentCarts.map((item) => {
    const itemFound = courses.find((course) => course.id === item.id);
    return { ...itemFound, quantity: item.quantity || 1 };
  });

  const user = await getUserByValidSessionToken(
    context.req.cookies.sessionToken,
  );

  if (user) {
    return {
      props: {
        courses: courseInCart,
      },
    };
  }

  return {
    redirect: {
      destination: '/login?returnTo=/cart',
      permanent: false,
    },
  };
}
