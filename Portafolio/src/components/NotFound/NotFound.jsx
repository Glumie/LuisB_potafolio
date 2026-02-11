import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './NotFound.css';

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="notFoundContenedor">
      <div className="notFoundContenido">
        {/* Número 404 con efecto glow */}
        <div className="notFoundNumero">
          <span className="notFound4">4</span>
          <span className="notFound0">0</span>
          <span className="notFound4">4</span>
        </div>

        {/* Línea decorativa */}
        <div className="notFoundLinea"></div>

        <h2 className="notFoundTitulo">
          {t('notFound.titulo', 'Página no encontrada')}
        </h2>
        <p className="notFoundDescripcion">
          {t('notFound.descripcion', 'La página que buscas no existe o fue movida.')}
        </p>

        <Link to="/" className="btnPrimario notFoundBtn">
          {t('notFound.btnVolver', 'Volver al inicio')}
        </Link>
      </div>

      {/* Partículas decorativas */}
      <div className="notFoundParticula notFoundParticula1"></div>
      <div className="notFoundParticula notFoundParticula2"></div>
      <div className="notFoundParticula notFoundParticula3"></div>
    </div>
  );
}

export default NotFound;