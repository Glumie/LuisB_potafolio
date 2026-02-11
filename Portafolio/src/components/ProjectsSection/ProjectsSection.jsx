import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ConstructionIcon from '@mui/icons-material/Construction';
import proyectosData from '../../data/proyectos';
import './ProjectsSection.css';

function ProjectsSection() {
  const { t } = useTranslation();

  // Separar proyectos publicados de próximos
  const proyectosPublicados = proyectosData.filter(p => p.estado === 'publicado');
  const proyectosProximos = proyectosData.filter(p => p.estado === 'proximo');

  return (
    <section id="proyectos" className="projectsContenedor seccion">
      <div className="projectsContenido contenedor">
        {/* Encabezado */}
        <div className="projectsEncabezado">
          <div className="projectsTituloWrapper">
            <span className="seccionEtiqueta">{t('projects.etiqueta')}</span>
            <h2 className="projectsTitulo">
              {t('projects.titulo')} <span className="textoAccento">{t('projects.tituloAccento')}</span>
            </h2>
          </div>
        </div>

        {/* Grid de Proyectos Publicados */}
        <div className="projectsGrid">
          {proyectosPublicados.map((proyecto) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} t={t} />
          ))}
        </div>

        {/* Sección Próximamente */}
        {proyectosProximos.length > 0 && (
          <div className="proximosWrapper">
            <h3 className="proximosTitulo">
              <RocketLaunchIcon fontSize="small" style={{ marginRight: '8px' }} /> {t('projects.proximamente')} <span className="textoAccento">/ Coming Soon</span>
            </h3>
            <div className="projectsGrid">
              {proyectosProximos.map((proyecto) => (
                <div key={proyecto.id} className="proximoCardWrapper">
                  <span className="proximoBadge">{t('projects.proximamente')}</span>
                  <ProjectCard proyecto={proyecto} t={t} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Componente interno para la card con carrusel
function ProjectCard({ proyecto, t }) {
  const [imgIndex, setImgIndex] = useState(0);
  const tieneImagenes = proyecto.imagenes && proyecto.imagenes.length > 0;
  const tieneMultiples = tieneImagenes && proyecto.imagenes.length > 1;

  const anterior = (e) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev === 0 ? proyecto.imagenes.length - 1 : prev - 1));
  };

  const siguiente = (e) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev === proyecto.imagenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <article className="projectCard vidrioCard">
      {/* Carrusel de imágenes */}
      <div className="projectCardImagen">
        {tieneImagenes ? (
          <div className="carruselWrapper">
            <img
              src={proyecto.imagenes[imgIndex]}
              alt={`${proyecto.titulo} - ${imgIndex + 1}`}
              className="carruselImg"
              loading="lazy"
            />
            {tieneMultiples && (
              <>
                <button className="carruselBtn carruselBtnIzq" onClick={anterior}>
                  <ArrowBackIosNewIcon style={{ fontSize: '14px' }} />
                </button>
                <button className="carruselBtn carruselBtnDer" onClick={siguiente}>
                  <ArrowForwardIosIcon style={{ fontSize: '14px' }} />
                </button>
                <div className="carruselDots">
                  {proyecto.imagenes.map((_, idx) => (
                    <span
                      key={idx}
                      className={`carruselDot ${idx === imgIndex ? 'carruselDotActivo' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setImgIndex(idx); }}
                    ></span>
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="projectCardImagenPlaceholder">
            <ConstructionIcon style={{ fontSize: '2rem', marginBottom: '8px' }} />
            <span>{t('projects.sinImagen')}</span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="projectCardContenido">
        <div className="projectCardTags">
          {proyecto.tags.map((tag, idx) => (
            <span key={idx} className="projectCardTag">{tag}</span>
          ))}
        </div>

        <h3 className="projectCardTitulo">{proyecto.titulo}</h3>
        <p className="projectCardDescripcion">{t(proyecto.descripcionKey)}</p>

        <a href="#" className="projectCardEnlace">
          {t('projects.verDetalles')} <ArrowForwardIcon fontSize="small" />
        </a>
      </div>
    </article>
  );
}

export default ProjectsSection;