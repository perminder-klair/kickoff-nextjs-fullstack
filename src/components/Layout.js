import Header from './global/Header';
import Footer from './global/Footer';

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
