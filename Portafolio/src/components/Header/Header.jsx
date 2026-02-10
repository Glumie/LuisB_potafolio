import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/icon/149434405.svg';
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();
  const navegar = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cambiarIdioma = (idioma) => {
    i18n.changeLanguage(idioma);
  };

  const idiomaActual = i18n.language;

  const enlacesNav = [
    { id: 'inicio', texto: t('nav.inicio'), href: '#inicio' },
    { id: 'sobreMi', texto: t('nav.sobreMi'), href: '#sobreMi' },
    /* { id: 'servicios', texto: t('nav.servicios'), href: '#servicios' }, */
    { id: 'proyectos', texto: t('nav.proyectos'), href: '#proyectos' },
    { id: 'contacto', texto: t('nav.contacto'), href: '#contacto' }
  ];

  const alternarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const manejarClickEnlace = (href) => {
    // Si es un anchor (#seccion), usa location.hash para que scroll-padding-top funcione
    if (href.startsWith('#')) {
      window.location.hash = '';
      setTimeout(() => {
        window.location.hash = href;
      }, 10);
    } else {
      // Si es una ruta, navega
      navegar(href);
    }
    setMenuAbierto(false);
  };

  return (
    <div id="headerPrincipal" className={`headerContenedor vidrioEfecto ${menuAbierto ? 'menuAbierto' : ''}`}>
      <div className="headerContenido contenedor">
        {/* Logo */}
        <div className="headerLogo" onClick={() => manejarClickEnlace('#inicio')}>
          <img src={Logo} alt="Logo" className="headerLogoImg" />
        </div>

        {/* Navegación Desktop */}
        <div className="headerNav">
          {enlacesNav.map((enlace) => (
            <div 
              key={enlace.id} 
              className="headerNavEnlace"
              onClick={() => manejarClickEnlace(enlace.href)}
            >
              {enlace.texto}
            </div>
          ))}
        </div>

        {/* Acciones (Selector idioma + botón contacto) */}
        <div className="headerAcciones">
          {/* Selector de idioma */}
          <div className="selectorIdioma">
            <div 
              className={`idiomaOpcion ${idiomaActual === 'es' ? 'idiomaActivo' : ''}`}
              onClick={() => cambiarIdioma('es')}
            >
              ES
            </div>
            <div 
              className={`idiomaOpcion ${idiomaActual === 'en' ? 'idiomaActivo' : ''}`}
              onClick={() => cambiarIdioma('en')}
            >
              EN
            </div>
          </div>


        </div>

        {/* Botón hamburguesa móvil */}
        <div 
          className={`btnHamburguesa ${menuAbierto ? 'menuAbierto' : ''}`} 
          onClick={alternarMenu}
        >
          <div className="hamburguesaLinea"></div>
          <div className="hamburguesaLinea"></div>
          <div className="hamburguesaLinea"></div>
        </div>

        {/* Menú móvil */}
        <div className={`menuMovil ${menuAbierto ? 'menuMovilAbierto' : ''}`}>
          {enlacesNav.map((enlace) => (
            <div 
              key={enlace.id} 
              className="menuMovilEnlace"
              onClick={() => manejarClickEnlace(enlace.href)}
            >
              {enlace.texto}
            </div>
          ))}
          <div className="selectorIdiomaMovil">
            <div 
              className={`idiomaOpcion ${idiomaActual === 'es' ? 'idiomaActivo' : ''}`}
              onClick={() => cambiarIdioma('es')}
            >
              ES
            </div>
            <div 
              className={`idiomaOpcion ${idiomaActual === 'en' ? 'idiomaActivo' : ''}`}
              onClick={() => cambiarIdioma('en')}
            >
              EN
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;