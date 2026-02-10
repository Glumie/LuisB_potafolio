import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

function Layout({ children }) {
  return (
    <div id="layoutPrincipal" className="layoutContenedor">
      <Header />
      <div className="layoutContenido">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;