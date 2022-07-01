/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import { productionBrowserSourceMaps } from '../next.config';

const headerLogoStyles = css`
font-size: 100%;
font-weight: bold;
z-index: 2;
`;
const headerStyles = css`
  padding: 5px 60px;
  background: #29293a;
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

export default function Header2(props) {
  return (
    <header css={headerStyles}>
      <div css={headerLogoStyles}>
      {props.user && <Link href="/users/private-profile">{props.user.username}</Link>}

      </div>

      <div>


         {/* <Link href="/cart">Cart</Link> */}
        {/* <Link href="/register">Register</Link>  */}
        {/* {props.user && <Link href="/users/private-profile">{props.user.username}</Link>} */}
        {props.user ? <Link href="/logout">Logout</Link> : <Link href="/login">Login</Link> }
       {/* <Link href="/about">About</Link> */}
      </div>

    </header>
  );
}