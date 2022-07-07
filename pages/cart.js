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
margin-left: 60px;
margin-bottom: 60px;
`;
const styleButton = css`
  text-align: center;
  margin-bottom: 20px;
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
  console.log(props, 'this is props');
  const [coursesInCart, setCoursesInCart] = useState(props.courses);

  useEffect(() => {
    Cookies.set('courses', JSON.stringify(coursesInCart))
  }, [])

  // const updateCart = () => {
  //   const currentCart = Cookies.get('cart')
  //     ? JSON.parse(Cookies.get('cart'))
  //     : [];

  //   setCoursesInCart(currentCart);
  //   console.log(coursesInCart, 'courses in cart');
  // }

  // useEffect(() => {
  //   updateCart();
  // }, []);



  const handleRemove = (courseId) => {
    const filteredCourses = coursesInCart.filter(
      (course) => course.id !== courseId,
    );
    setStringifiedCookie('cart', filteredCourses);
    setCoursesInCart(filteredCourses);
    console.log('coursesInCart log', coursesInCart)
  };

  const totalPrice = coursesInCart.reduce((sum, item) => sum + Number(item.price), 0);
  console.log(totalPrice);
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
        <h3 css={sumStyle}>Total price: ${totalPrice}</h3>
        <ul css={allText}>
          {' '}
          {coursesInCart.map((course) => {
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
        <button
          css={styleButtons}
          data-test-id="checkout-confirm-order"
          className="checkoutConfirm"
        >
          <Link href="/checkout">Checkout</Link>
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
