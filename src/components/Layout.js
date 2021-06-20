import 'twin.macro';

import Header from './global/Header';
import Footer from './global/Footer';

const Layout = ({ children }) => (
  <div tw="container mx-auto">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
