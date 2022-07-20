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
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          // start game *****************************
          #star {
            width: 2px;
            height: 2px;
            position: relative;
            top: -80px;
            left: 1200px;
            background-color: white;
            background-size: 2px 2px;
            animation: block 1.7s 0.1s infinite linear;
          }

          @keyframes block {
            0% {
              left: 1200px;
            }

            100% {
              left: -20px;
            }
          }
          #star2 {
            width: 4px;
            height: 2px;
            position: relative;
            top: 270px;
            left: 1200px;
            background-color: white;
            background-size: 4px 2px;
            animation: block 2.2s 0.3s infinite linear;
          }

          @keyframes block {
            0% {
              left: 1200px;
            }

            100% {
              left: -20px;
            }
          }

          #star3 {
            width: 4px;
            height: 2px;
            position: relative;
            top: 70px;
            left: 1200px;
            background-color: white;
            background-size: 4px 2px;
            animation: block 1.2s 0.6s infinite linear;
          }

          @keyframes block {
            0% {
              left: 1200px;
            }

            100% {
              left: -20px;
            }
          }

          #star4 {
            width: 4px;
            height: 2px;
            position: relative;
            top: 220px;
            left: 1200px;
            background-color: white;
            background-size: 4px 2px;
            animation: block 1.7s 0.7s infinite linear;
          }

          @keyframes block {
            0% {
              left: 1200px;
            }

            100% {
              left: -20px;
            }
          }

          #star5 {
            width: 4px;
            height: 2px;
            position: relative;
            top: 160px;
            left: 1200px;
            background-color: white;
            background-size: 4px 2px;
            animation: block 1.9s 0.9s infinite linear;
          }

          @keyframes block {
            0% {
              left: 1200px;
            }

            100% {
              left: -20px;
            }
          }

          #rocket {
            width: 80px;
            height: 80px;
            position: relative;
            top: 150px;
            left: 1200px;

            background-image: url('./rocket.gif');
            background-size: 80px 80px;
            transform: rotate(270deg);
            animation: block 1s 4.7s 1 linear, block 1s 12.8s 1 linear,
              block 1s 26.8s 1 linear, block 1s 126.8s 1 linear;
          }

          @keyframes block {
            0% {
              left: 1200px;
            }

            100% {
              left: 20px;
            }
          }

          #meteor {
            width: 80px;
            height: 80px;
            position: relative;
            top: 350px;
            left: 1200px;

            background-image: url('./meteor.gif');
            background-size: 80px 80px;

            animation: block 20s 1s 40 linear;
          }

          @keyframes block {
            0% {
              left: 1200px;
            }

            100% {
              left: 20px;
            }
          }

          .cat {
            position: absolute;
            top: 250px;
            left: 350px;
            height: 103px;
            width: 187px;
            /* border-radius: 50%;
            background-color: blue; */
            background-image: url('cat-fly.gif');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            transform: rotate(345deg);
            transition: 1s linear;
          }

          /* .jump1 {
            animation: test 2s linear;
          }

          @keyframes test {
            0% {
              top: 250px;
              left: 350px;
            }
            25% {
              top: 190px;
              left: 350px;
            }
            50% {
              top: 150px;
              left: 350px;
            }
            75% {
              top: 190px;
              left: 350px;
            }
            100% {
              top: 250px;
              left: 350px;
            }
          } */

          #main-nlo {
            position: absolute;
            top: -100px;
            left: 950px;
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
            position: absolute;
            top: 60px;
            left: 920px;
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

          #enemy {
            width: 80px;
            height: 80px;
            position: absolute;
            /* top: 160px;
            left: 970px; */

            background-image: url('./vrag1.gif');
            background-size: 80px 80px;

            /* animation: block 5s 5s 1 linear, block 4s 11s 1 linear,
              block 3s 17s 1 linear, block 2s 26s 1 linear,
              block 1s 32s 1 linear, block 5s 38s 1 linear,
              block 5s 44s 1 linear, block 5s 50s infinite linear; */
          }

          /* @keyframes block {
            0% {
              left: 970px;
            }

            100% {
              left: 20px;
            }
          } */

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
