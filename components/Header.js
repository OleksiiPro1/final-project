/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import { productionBrowserSourceMaps } from '../next.config';

const headerLogoStyles = css`
font-size: 120%;
font-weight: bold;
z-index: 2;
`;
const headerStyles = css`
  padding: 10px 60px;
  background: black;
  z-index: 1;
  display: flex;
  justify-content: space-between;

  > div > a {
    text-decoration: none;
    color: white;
  }
  > div > a + a {
    margin-left: 60px;
  }
`;

export default function Header(props) {
  return (
    <header css={headerStyles}>
      <div css={headerLogoStyles}>
        <Link href="/">MI$$ION REACT</Link>

      </div>

      <div>

        <Link href="/courses/1">HTML</Link>
        <Link href="/courses/2">CSS</Link>
        <Link href="/courses/3">JAVASCRIPT</Link>
        <Link href="/courses/4">REACT</Link>
        <Link href="/cart">Cart</Link>
        {/* <Link href="/register">Register</Link>  */}
        {/* {props.user && <Link href="/users/private-profile">{props.user.username}</Link>} */}
        {/* {props.user ? <Link href="/logout">Logout</Link> : <Link href="/login">Login</Link> } */}
       {/* <Link href="/about">About</Link> */}
      </div>

    </header>
  );
}