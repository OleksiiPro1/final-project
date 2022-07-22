/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';

// import { productionBrowserSourceMaps } from '../next.config';

const headerLogoStyles = css`
  font-size: 120%;
  font-weight: bold;
  z-index: 2;
`;
const headerStyles = css`
  padding-top: 50px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 10px;
  background: black;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 50;

  > div > a {
    text-decoration: none;
    color: white;
  }
  > div > a + a {
    margin-left: 60px;
  }

  @media screen and( max-width: 768px) {
    justify-content: space-around;
    .menu {
      display: none;
    }
  }
`;

export default function Header(props) {
  return (
    <header css={headerStyles}>
      <div css={headerLogoStyles}>
        <Link href="/">MI$$ION REACT</Link>
      </div>

      <div className="menu">
        <Link href="/courses/1">HTML</Link>
        <Link href="/courses/2">CSS</Link>
        <Link href="/courses/3">JAVASCRIPT</Link>
        <Link href="/courses/4">REACT</Link>
        {/* <Link href="/cart">Cart</Link> */}
        {/* <Link href="/register">Register</Link>  */}
        {/* {props.user && <Link href="/users/private-profile">{props.user.username}</Link>} */}
        {/* {props.user ? <Link href="/logout">Logout</Link> : <Link href="/login">Login</Link> } */}
        {/* <Link href="/about">About</Link> */}
      </div>
    </header>
  );
}
