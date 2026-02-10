import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Logo from '../../assets/icon/149434405.svg';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  const navegar = useNavigate();
  const anioActual = new Date().getFullYear();

  const redesSociales = [
    /* { id: 'linkedin', icono: <LinkedInIcon />, url: 'https://linkedin.com', titulo: 'LinkedIn' }, */
    { id: 'github', icono: <GitHubIcon />, url: 'https://github.com/Glumie', titulo: 'GitHub' },
    /* { id: 'twitter', icono: <XIcon />, url: 'https://twitter.com', titulo: 'Twitter' } */
  ];

  const scrollArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const abrirEnlaceExterno = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="footerPrincipal" className="footerContenedor">
      {/* Sección de redes sociales */}
      <div className="footerRedesSociales">
        {redesSociales.map((red) => (
          <div 
            key={red.id}
            className="footerRedEnlace vidrioCard"
            title={red.titulo}
            onClick={() => abrirEnlaceExterno(red.url)}
          >
            {red.icono}
          </div>
        ))}
      </div>

      {/* Logo y copyright */}
      <div className="footerBranding">
        <div className="footerLogoWrapper">
          <img src={Logo} alt="Logo" className="footerLogoImg" />
          <span className="footerLogoTexto">{t('footer.nombre')}</span>
        </div>
        <p className="footerCopyright">
          © {anioActual} {t('footer.nombre')} Portfolio. {t('footer.derechos')}
        </p>
      </div>

      {/* Botón volver arriba */}
      <div className="footerVolverArriba" onClick={scrollArriba}>
        <div className="footerVolverIcono"><KeyboardArrowUpIcon /></div>
        <span className="footerVolverTexto">{t('footer.volverArriba')}</span>
      </div>
    </div>
  );
}

export default Footer;