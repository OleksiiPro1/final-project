/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const mainText = css`
text-align: center;
  color: white;
  font-size: 10pt;
  margin-top: 30px;
  cursor: pointer;
`;
const footerDivStyles = css`
    background: black;
`;
export default function Footer() {
  return (
    <footer css={footerDivStyles}>
      <div >
      <br />
      <br />
<hr />
<p css={mainText}>© 2022 MISSION REACT. Made in Vienna</p>
          <br />


      </div>
    </footer>
  );
}
