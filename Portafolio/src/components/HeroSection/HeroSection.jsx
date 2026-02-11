import { useTranslation } from 'react-i18next';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import miFoto from '../../assets/img/Me/me.webp';
import './HeroSection.css';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <div id="inicio" className="heroContenedor">
      <div className="heroContenido contenedor">
        {/* Texto principal */}
        <div className="heroTexto">
          <h1 className="heroTitulo">
            <span className="heroSaludo">{t('hero.saludo')}</span>
            <span className="heroNombre">{t('hero.nombre')}</span>
            <span className="heroRol">
              <span className="heroRolParte1">{t('hero.rolParte1')}</span>
              <span className="heroRolParte2">{t('hero.rolParte2')}</span>
            </span>
          </h1>
          
          <p className="heroDescripcion">
            {t('hero.descripcion')}
          </p>

          <div className="heroAcciones">
            <a href="/CV Luis Blandon.pdf" download className="btnPrimario">
              {t('hero.btnCV')} <FileDownloadOutlinedIcon fontSize="small" />
            </a>
          </div>
        </div>

        {/* Imagen/Avatar */}
        <div className="heroImagenWrapper">
          <div className="heroImagenMarco">
            <img src={miFoto} alt="Luis Blandon" className="heroImagenFoto" />
          </div>
          {/* Efecto decorativo */}
          <div className="heroDecorativo"></div>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div className="heroLineaDecorativa"></div>
    </div>
  );
}

export default HeroSection;