import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getCourses } from '../util/database';

const styleButtons = css`
  cursor: pointer;

  margin-bottom: 50px;
  border: 2px solid gray;
  background-color: white;
  color: black;
  padding: 8px;
`;
const mainCatStyle = css`
margin-top: -600px;

z-index: -1;
`;
const inputs =css`
margin-left: 15px;
`;
const mainDiv =css`
color: white;
margin-left: 60px;
margin-bottom: 100px;
text-align: center;
padding-top: 90px;
`;
export default function About(props) {

  const [coursesInCart, setCoursesInCart] = useState(props.courses);
  const totalPrice = coursesInCart.reduce((sum, item) => sum + Number(item.price), 0);
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About the app" />
      </Head>

      <main>
        <div css={mainDiv}>
          <div className="checkoutInfo">
            <h1>Welcome to checkout</h1>


          </div>
          <div className="checkoutFormWrapper">
            <form className="checkoutForm" >
              <div className="personalDetails">
                <h3> Personal Details</h3>
                <label>

                  <input
                  css={inputs}
                    placeholder="First Name"
                    data-test-id="checkout-first-name"
                    required
                  />
                </label>
                <br /><br />
                <label>

                  <input css={inputs}
                    placeholder="Last Name"
                    data-test-id="checkout-last-name"
                    required
                  />
                </label>
                <br /><br />
                <label>

                  <input css={inputs}
                    placeholder="email (email@example.com)"
                    data-test-id="checkout-email"
                    type="E-Mail"
                    required
                  />
                </label>
              </div>
              <div className="shippingDetails">
              <br /><br />
                <h3> Payment Information</h3>
                <label>

                  <input css={inputs}
                    placeholder="Credit Card №"
                    data-test-id="checkout-credit-card"
                    type="number"
                    required
                    maxLength="12"
                  />
                </label>
                <br /><br />
                <label>

                  <input css={inputs}
                    data-test-id="checkout-expiration-date"
                    type="number"
                    maxLength="4"
                    placeholder="Expiration Date (MM/YY)"
                    required
                  />
                </label>
                <br /><br />
                <label>

                  <input css={inputs}
                    placeholder="Security Code (123)"
                    maxLength="3"
                    data-test-id="checkout-security-code"
                    type="password"
                    required
                  />
                </label>
              </div>
              <br /><br />
              <h4>Total price: ${totalPrice}</h4>

              <button css={styleButtons}
                data-test-id="checkout-confirm-order"
                className="checkoutConfirm"
              >
                <Link href="/thankyou">Confirm Order</Link>
              </button>
            </form>
          </div>
        </div>
        <div css={mainCatStyle}>
        <Image
          src="/login_cosmo_cat.png"

          width="457px"
          height="466px"
          alt="courses"
        />
        </div>
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const courses = await getCourses();
  const currentCarts = JSON.parse(context.req.cookies.cart || '[]');
  const courseInCart = currentCarts.map((item) => {
    const itemFound = courses.find((course) => course.id === item.id);
    return { ...itemFound, quantity: item.quantity || 1 };
  });
return {
  props: {
    courses: courseInCart,
  },
}
}