import { useTranslation } from 'react-i18next';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import RouterIcon from '@mui/icons-material/Router';
import './ExperienceTimeline.css';

function ExperienceTimeline() {
  const { t } = useTranslation();

  const formaciones = [
    {
      id: 'universidad',
      icono: <SchoolIcon />,
      titulo: t('experience.uni.titulo'),
      institucion: t('experience.uni.institucion'),
      periodo: t('experience.uni.periodo'),
      progreso: 50,
      estado: t('experience.uni.estado'),
    },
    {
      id: 'fwd',
      icono: <WorkspacePremiumIcon />,
      titulo: t('experience.fwd.titulo'),
      institucion: t('experience.fwd.institucion'),
      periodo: t('experience.fwd.periodo'),
      progreso: 100,
      estado: t('experience.fwd.estado'),
    },
    {
      id: 'ccna',
      icono: <RouterIcon />,
      titulo: t('experience.ccna.titulo'),
      institucion: t('experience.ccna.institucion'),
      periodo: t('experience.ccna.periodo'),
      progreso: 30,
      estado: t('experience.ccna.estado'),
    }
  ];

  return (
    <div id="experiencia" className="formacionContenedor seccion">
      <div className="formacionContenido contenedor">
        {/* Encabezado */}
        <div className="formacionEncabezado seccionTitulo">
          <span className="seccionEtiqueta">{t('experience.etiqueta')}</span>
          <h2 className="formacionTitulo">
            {t('experience.titulo')} <span className="textoAccento">{t('experience.tituloAccento')}</span>
          </h2>
        </div>

        {/* Cards de formación */}
        <div className="formacionGrid">
          {formaciones.map((item) => (
            <div key={item.id} className="formacionCard vidrioCard">
              <div className="formacionCardHeader">
                <div className="formacionIcono">{item.icono}</div>
                <div className="formacionInfo">
                  <h3 className="formacionCardTitulo">{item.titulo}</h3>
                  <span className="formacionInstitucion">{item.institucion}</span>
                </div>
              </div>

              <span className="formacionPeriodo">{item.periodo}</span>

              {/* Barra de progreso */}
              <div className="formacionProgresoWrapper">
                <div className="formacionProgresoBar">
                  <div
                    className={`formacionProgresoFill ${item.progreso === 100 ? 'progresoCompleto' : ''}`}
                    style={{ width: `${item.progreso}%` }}
                  ></div>
                </div>
                <div className="formacionProgresoInfo">
                  <span className={`formacionEstado ${item.progreso === 100 ? 'estadoCompleto' : 'estadoEnProgreso'}`}>
                    {item.estado}
                  </span>
                  <span className="formacionPorcentaje">{item.progreso}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceTimeline;