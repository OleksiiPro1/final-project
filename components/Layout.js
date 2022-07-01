import Footer from './Footer';
import Header from './Header';
import Header2 from './Header2';

export default function Layout(props) {
  return (
    <div>
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
