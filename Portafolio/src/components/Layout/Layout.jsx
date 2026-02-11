import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

function Layout({ children }) {
  return (
    <div id="layoutPrincipal" className="layoutContenedor">
      <Header />
      <main className="layoutContenido">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;