/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';

const headerLogoStyles = css`
font-weight: bold;
`;
const headerStyles = css`
  padding: 15px 60px;
  background: black;

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
        <Link href="/">MISSION REACT</Link>
      </div>
      <div>
      <Link href="/courses">Courses</Link>
        <Link href="/courses/1">HTML</Link>
        <Link href="/courses/2">CSS</Link>
        <Link href="/courses/3">JAVASCRIPT</Link>
        <Link href="/courses/4">REACT</Link>

      </div>

    </header>
  );
}