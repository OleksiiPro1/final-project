/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';

const ulText = css`
  list-style-type: none;
  color: white;
  font-size: 10pt;
  margin-left: 100px;
  padding-top: 50px;
  cursor: pointer;
`;
const mainText = css`
  text-align: center;
  color: white;
  font-size: 10pt;
  margin-top: 30px;
`;
const footerDivStyles = css`
  position: ;
  left: 0;
  bottom: 0;
  padding: 10px;
  width: 100%;
  background: black;
  // height: 100px;
`;
const footerLinksStyles = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: black;
`;
export default function Footer() {
  return (
    <footer>
      <div css={footerDivStyles}>
        <div>
          <div css={footerLinksStyles}>
            <ul css={ulText}>
              <Link href="/courses/1">
                <li>HTML</li>
              </Link>
              <Link href="/courses/2">
                <li>CSS</li>
              </Link>
              <Link href="/courses/3">
                <li>JAVASCRIPT</li>
              </Link>
              <Link href="/courses/4">
                <li>REACT</li>
              </Link>
            </ul>

            <ul css={ulText}>
              <Link href="/">
                <li>MI$$ION REACT</li>
              </Link>
              <Link href="/cart">
                <li>CART</li>
              </Link>
              <Link href="/blog">
                <li>BLOG</li>
              </Link>
              <Link href="/contacts">
                <li>CONTACTS</li>
              </Link>
            </ul>
          </div>
          <br />
          <br />
        </div>
        <hr />
        <br />
        <div css={mainText}>
          <p>© 2022 MISSION REACT. Made in Vienna</p>
          <br />
        </div>
      </div>
    </footer>
  );
}
