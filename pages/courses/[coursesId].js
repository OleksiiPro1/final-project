// import { useRouter } from 'next/router';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import { missionReactDatabase } from '../../utils/database';

const imgContainer2 = css`

 color: white;
 align-content: center;

`;

export default function Mission(props) {

if (!props.courses) {
  return <div css={imgContainer2}><br /><br /><br /><h1>404 Page not found</h1><br /><br /><br /><Image src='/main1cosmo_cat.png' width="200px"
              height="200px" alt="courses"/><br /><br /><br /></div>
}

  // const router = useRouter()
//  const { missionId } = router.query;
return (
<div>

  <div><Image src={`/${props.courses.id}.png`} width="200px"
  height="200px" alt="courses"/></div>
<div>{props.courses.planet}</div>
<div>{props.courses.price}</div>
<div>{props.courses.description}</div>
</div>
);
}

export function getServerSideProps(context) {
  const foundCourses = missionReactDatabase.find((courses) => {

    return ( courses.id === context.query.coursesId
    );
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