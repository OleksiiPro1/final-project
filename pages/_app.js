import { css, Global } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();

  const refreshUserProfile = useCallback(async () => {
    const profileResponse = await fetch('/api/profile');
    const profileResponseBody = await profileResponse.json();

    if (!('errors' in profileResponseBody)) {
      setUser(profileResponseBody.user);
    } else {
      profileResponseBody.errors.forEach((error) => console.log(error.message));
      setUser(undefined);
    }
  }, []);

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
            font-family:  -apple-system, BlinkMacSystemFont,
              Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
              Helvetica Neue, sans-serif;
          }
          // start game *****************************

          #rocket {
            width: 40px;
            height: 40px;
            position: relative;
            top: 50px;
            left: 1200px;
            overflow-x: hidden;

            background-image: url('./meteor.gif');
            background-size: 40px 40px;

            animation: block 6s 5s infinite linear;
          }
          @keyframes block {
            0% {
              left: 1200px;
            }

            100% {
              left: -20px;
            }
          }

          #meteor {
            width: 40px;
            height: 40px;
            position: relative;
            top: 50px;
            left: 1200px;

            background-image: url('./meteor.gif');
            background-size: 40px 40px;

            animation: block 3s 10s 2 linear, block 3s 20s infinite linear;
          }

          @keyframes block {
            0% {
              left: 1200px;
            }

            100% {
              left: -20px;
            }
          }
          .circle {
            position: relative;
            top: 100px;
            left: 350px;
            height: 103px;
            width: 187px;
            /* border-radius: 50%;
            background-color: blue; */
            background-image: url('cat-fly.gif');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            // transform: rotate(90deg);
          }

          .jump1 {
            animation: test 2s linear;
          }

          @keyframes test {
            0% {
              top: 100px;
              left: 350px;
            }
            25% {
              top: 60px;
              left: 350px;
            }
            50% {
              top: 20px;
              left: 350px;
            }
            75% {
              top: 60px;
              left: 350px;
            }
            100% {
              top: 100px;
              left: 350px;
            }
          }

          #main-nlo {
            position: relative;
            top: -280px;
            left: 680px;
            height: 480px;
            width: 270px;
            /* border-radius: 50%;
            background-color: blue; */
            background-image: url('main-nlo.gif');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
          #dim-nlo {
            position: relative;
            top: -600px;
            left: 650px;
            height: 480px;
            width: 360px;
            /* border-radius: 50%;
            background-color: blue; */
            background-image: url('dim-nlo.gif');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            transform: rotate(180deg);
          }
          #vrag1 {
            width: 80px;
            height: 80px;
            position: relative;
            top: 30px;
            left: 900px;

            background-image: url('./vrag1.gif');
            background-size: 80px 80px;

            animation: block 5s 10s infinite linear;
          }

          @keyframes block {
            0% {
              left: 900px;
            }

            100% {
              left: -20px;
            }
          }

          // end game **********************************
          .container {
            max-width: 1180px;
            margin: 0px auto;
            padding: 0px 10px;
          }

          .header {
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 50;
            margin-top: 33px;
          }
          .header:before {
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
          .header_logo {
          }
          .header_burger {
          }
          .header_menu {
          }
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

      <Layout user={user}>
        <Component {...pageProps} refreshUserProfile={refreshUserProfile} />
      </Layout>
    </>
  );
}

export default MyApp;
