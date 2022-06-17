/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';

const headerLogoStyles = css`
font-weight: bold;
`;
const headerStyles = css`
  padding: 15px 60px;
  background: #29293a;

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
        <Link href="/">HTML</Link>
        <Link href="/">CSS</Link>
        <Link href="/">JAVASCRIPT</Link>
        <Link href="/">REACT</Link>

      </div>
    </header>
  );
}