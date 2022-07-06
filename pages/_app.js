import { css, Global } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();

  const refreshUserProfile = useCallback(async()=> {
    const profileResponse = await fetch('/api/profile');
    const profileResponseBody = await profileResponse.json();

    if(!('errors' in profileResponseBody)) {
    setUser(profileResponseBody.user);
        }else {
          profileResponseBody.errors.forEach((error)=> console.log(error.message) )
          setUser(undefined);
        }
  },[])



  useEffect(() => {


 refreshUserProfile().catch(() => console.log('fetch api failed'));

}, [refreshUserProfile]);



  return (
    <>
      <Global
        styles={css`
          html,
          body {
            background-color: #29293a;
            padding: 0;
            margin: 0;
            font-family: 'Kdam Thmor Pro', -apple-system, BlinkMacSystemFont,
              Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
              Helvetica Neue, sans-serif;
          }

          .container{
            max-width: 1180px;
            margin: 0px auto;
            padding: 0px 10px;
          }

          .header{
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 50;
            margin-top: 33px;
          }
          .header:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .header_body {
            display: flex;
          }
          .header_logo {}
          .header_burger {}
          .header_menu {}
          .header_list {
            color: white;
            z-index: 50;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          * {
            box-sizing: border-box;
          }

          .grow {
            transition: all 1s;
          }

          .grow:hover {
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
          }

          .buttonColor:hover {
            background: white;
            color: black;
          }

          img.rot {
            animation: 3s linear 0s normal none infinite running rot;
            -webkit-animation: 100s linear 0s normal none infinite running rot;
            width: 100px;
          }
          @keyframes rot {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          @-webkit-keyframes rot {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}

      />

      <Layout user={user} >
        <Component {...pageProps} refreshUserProfile={refreshUserProfile} />
      </Layout>
    </>
  );
}

export default MyApp;
