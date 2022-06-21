// import { useRouter } from 'next/router';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import { missionReactDatabase } from '../../utils/database';

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
  margin-top: 10px;
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

  // const router = useRouter()
  //  const { missionId } = router.query;
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
          <button  css={buttonContent}>I like it!</button>
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
          No matter what… you can’t get better at React if your javascript
          fundamental is not clear. During the interviews, it is one of the
          essential skills to learn before moving to react. Javascript is one of
          the most confusing languages for developers and it ignores small
          errors that can create a problem in your project if you won’t notice
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

export function getServerSideProps(context) {
  const foundCourses = missionReactDatabase.find((courses) => {
    return courses.id === context.query.coursesId;
  });

  if (!foundCourses) {
    context.res.statusCode = 404;
  }

  return {
    props: {
      //  missionId: context.query.missionId,
      courses: foundCourses || null,
    },
  };
}
