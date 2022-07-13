/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Footer from './Footer';
import Header from './Header';
import Header2 from './Header2';

export default function Layout(props) {
  return (
    <div className="test" onClick={(event) => console.log(event.key)}>
      <Header2 user={props.user} refreshUserProfile={props.refreshUserProfile} />
      <Header user={props.user} refreshUserProfile={props.refreshUserProfile} />

      {
        // Page content
        props.children
      }

      <Footer />
    </div>
  );
}
