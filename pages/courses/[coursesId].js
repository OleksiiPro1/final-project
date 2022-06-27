// import { useRouter } from 'next/router';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../util/cookies';
import { getCourse } from '../../util/database';

const buttonDiv = css`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: white;
`;

const buttonContent = css`
  align-content: center;
  font-size: 14px;
  padding: 10px 24px;
  background-color: white;
  color: black;
  border: 2px solid gray;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
`;
const dinH1 = css`
  color: white;
  text-align: center;
`;
const pContent = css`
  color: white;
  margin: 50px;
`;
const img404 = css`
  color: white;

  text-align: center;
`;

export default function Mission(props) {
  const [isInCart, setIsInCart] = useState('addCounter' in props.courses);
  const [addCounter, setAddCounter] = useState(props.courses.addCounter || 0);


  useEffect(() => {

    const currentCart = Cookies.get('cart')
    ? JSON.parse(Cookies.get('cart'))
    : [];


  if(currentCart.find((courseInCart) => props.courses.id === courseInCart.id)) {

    setIsInCart(true)

  } else {

    setIsInCart(false);
  }

  }, [props.courses.id]);

  useEffect(() => {
    const currentCart = Cookies.get('cart')
                ? JSON.parse(Cookies.get('cart'))
                : [];
                const currentCourseInCart = currentCart.find((courseInCart) => props.courses.id === courseInCart.id);

                if (currentCourseInCart) {
                  setAddCounter(currentCourseInCart.addCounter);
                }
  },[props.courses.id]);


  if (!props.courses) {
    return (
      <div css={img404}>
        <br />
        <br />
        <br />
        <h1>404 Page not found</h1>
        <br />
        <br />
        <br />
        <Image
          src="/404_cat.png"
          class="rot"
          width="200px"
          height="200px"
          alt="courses"
        />
        <br />
        <br />
        <br />
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1 css={dinH1}>{props.courses.planet}</h1>
      </div>
      <div>
        <Image
          src={`/${props.courses.id}courses2.png`}
          width="1549px"
          height="484px"
          alt="courses"
        />
      </div>

      <div css={buttonDiv}>
        <div>{props.courses.description}</div>
        <div css={buttonDiv}>
          <button
            onClick={() => {
              const currentCart = Cookies.get('cart')
                ? getParsedCookie('cart')
                : [];
              let newCart;

              if (
                currentCart.find(
                  (courseInCart) => props.courses.id === courseInCart.id,
                )
              ) {
                newCart = currentCart.filter(
                  (courseInCart) => courseInCart.id !== props.courses.id,
                );
                setIsInCart(false);
                setAddCounter(0);
              } else {
                newCart = [
                  ...currentCart,
                  { id: props.courses.id, addCounter: 1 },
                ];
                setIsInCart(true);
              }

              setStringifiedCookie('cart', newCart);
            }}
            css={buttonContent}
          >
            {isInCart ? 'remove from cart' : 'add to cart'}
          </button>
          <br />
          {isInCart ? (
            <>
              {addCounter}
              <div>
                  <button css={buttonContent}
                onClick={() => {
                  setAddCounter(addCounter + 1);
                  const currentCart = Cookies.get('cart')
                    ? getParsedCookie('cart')
                    : [];
                  const currentCourseInCart = currentCart.find(
                    (courseInCart) => props.courses.id === courseInCart.id,
                  );
                  currentCourseInCart.addCounter += 1;

                  setStringifiedCookie('cart', currentCart);
                }}
              >
                add student
              </button>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
        <div>Price: {props.courses.price}$</div>
      </div>
      <hr />
      <div css={pContent}>
        <p>
          Every front-end developer starts their journey with HTML and CSS. So
          before you start learning to react you should have a good command of
          writing HTML and CSS. You should know how to write semantic HTML tags,
          how to write CSS selectors, how to use classes, how to implement a CSS
          reset, box model, how to reset to border-box, flexbox, how to write
          responsive web applications including media queries, and how to build
          a frontend application using HTML and CSS.
        </p>
        <p>
          No matter what… you cant get better at React if your javascript
          fundamental is not clear. During the interviews, it is one of the
          essential skills to learn before moving to react. Javascript is one of
          the most confusing languages for developers and it ignores small
          errors that can create a problem in your project if you wont notice
          them earlier. So make sure that you first clear your basic concept
          about javascript and then you move to the advanced version of
          ECMAScript5 and ECMAScript6. Some of the topics are given below but
          make sure that you explore as much as you can and build some projects
          as well for in-depth knowledge in javascript.
        </p>
      </div>
    </div>
  );
}


// const currentCart = JSON.parse(context.req.cookies.cart || '[]');



  // console.log(currentCart);

 // const foundCourses = missionReactDatabase.find((courses) => {
  //  return courses.id === context.query.coursesId;
// });

  // const currentCourseInCart = currentCart.find(
 //   (courseInCart) => foundCourses.id === courseInCart.id,
 // );

  // if (!foundCourses) {
  //  context.res.statusCode = 404;
  // }

  // const superCourses = { ...foundCourses, ...currentCourseInCart };

  // console.log(foundCourses);
  // console.log(superCourses);



  export async function getServerSideProps(context) {
    const course = await getCourse(context.query.coursesId)
    console.log(context.query.coursesId)
    console.log(course)
    if (!course) {
      return {}
    } else {
      return {
        props: {
          courses: course || null,
          /* foundCourses */ /* superCourses || null, */
        },
    }

  };
}
