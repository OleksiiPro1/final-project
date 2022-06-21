/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';

const headerLogoStyles = css`
font-weight: bold;
z-index: 2;
`;
const headerStyles = css`
  padding: 15px 60px;
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

export default function Header() {
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
      </div>

    </header>
  );
}