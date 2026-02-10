import { useTranslation } from 'react-i18next';
import SchoolIcon from '@mui/icons-material/School';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CodeIcon from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import TerminalIcon from '@mui/icons-material/Terminal';
import BoltIcon from '@mui/icons-material/Bolt';
import DnsIcon from '@mui/icons-material/Dns';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import './AboutComponent.css';

function AboutComponent() {
  const { t } = useTranslation();

  const categoriasTech = [
    {
      id: 'frontend',
      nombre: 'Frontend',
      tecnologias: [
        { id: 'react', nombre: 'React', icono: <CodeIcon fontSize="small" /> },
        { id: 'javascript', nombre: 'JavaScript', icono: <JavascriptIcon fontSize="small" /> },
        { id: 'html', nombre: 'HTML5', icono: <HtmlIcon fontSize="small" /> },
        { id: 'css', nombre: 'CSS3', icono: <CssIcon fontSize="small" /> }
      ]
    },
    {
      id: 'backend',
      nombre: 'Backend',
      tecnologias: [
        { id: 'django', nombre: 'Django', icono: <TerminalIcon fontSize="small" /> },
        { id: 'fastapi', nombre: 'FastAPI', icono: <BoltIcon fontSize="small" /> },
        { id: 'nodejs', nombre: 'Node.js', icono: <DnsIcon fontSize="small" /> }
      ]
    },
    {
      id: 'databases',
      nombre: 'Databases',
      tecnologias: [
        { id: 'postgresql', nombre: 'PostgreSQL', icono: <StorageIcon fontSize="small" /> },
        { id: 'mysql', nombre: 'MySQL', icono: <StorageIcon fontSize="small" /> },
        { id: 'mongodb', nombre: 'MongoDB', icono: <DataObjectIcon fontSize="small" /> }
      ]
    },
    {
      id: 'languages',
      nombre: 'Languages',
      tecnologias: [
        { id: 'python', nombre: 'Python', icono: <TerminalIcon fontSize="small" /> },
        { id: 'java', nombre: 'Java', icono: <CodeIcon fontSize="small" /> }
      ]
    },
    {
      id: 'automation',
      nombre: 'AI & Automation',
      tecnologias: [
        { id: 'n8n', nombre: 'n8n', icono: <SyncAltIcon fontSize="small" /> },
        { id: 'openai', nombre: 'OpenAI API', icono: <SmartToyOutlinedIcon fontSize="small" /> }
      ]
    },
    {
      id: 'proximamente',
      nombre: 'Próximamente',
      proximamente: true,
      tecnologias: [
        { id: 'dotnet', nombre: '.NET', icono: <CodeIcon fontSize="small" /> },
        { id: 'csharp', nombre: 'C#', icono: <CodeIcon fontSize="small" /> }
      ]
    }
  ];

  return (
    <div id="sobreMi" className="aboutContenedor seccion">
      <div className="aboutContenido contenedor">
        {/* Seccion izquierda:  Info personal */}
        <div className="aboutInfoPersonal">
          <div className="aboutEtiqueta seccionEtiqueta">
            {t('about.etiqueta')}
          </div>
          
          <h2 className="aboutTitulo">
            {t('about.titulo')} <span className="textoAccento">{t('about.tituloAccento')}</span>
          </h2>

          <div className="aboutCardPrincipal vidrioCard">
            <div className="aboutCardIcono"><SchoolIcon /></div>
            <div className="aboutCardContenido">
              <h3 className="aboutCardTitulo">{t('about.estudios')}</h3>
              <p className="aboutCardTexto">
                {t('about.descripcionAcademica')}
              </p>
            </div>
          </div>

          <div className="aboutContacto">
            <div className="aboutContactoItem">
              <span className="aboutContactoIcono"><EmailOutlinedIcon fontSize="small" /></span>
              <span className="aboutContactoTexto">{t('about.email')}</span>
            </div>
            <div className="aboutContactoItem">
              <span className="aboutContactoIcono"><LocationOnOutlinedIcon fontSize="small" /></span>
              <span className="aboutContactoTexto">{t('about.ubicacion')}</span>
            </div>
          </div>
        </div>

        {/* Seccion derecha: Tech Stack por Categorías */}
        <div className="aboutTechStack">
          <div className="aboutTechEtiqueta">
            <span className="aboutTechLinea"></span>
            {t('skills.etiqueta')}
          </div>

          <div className="aboutCategoriasGrid">
            {categoriasTech.map((categoria) => (
              <div key={categoria.id} className={`aboutCategoriaCard vidrioCard ${categoria.proximamente ? 'aboutCategoriaProximamente' : ''}`}>
                <h4 className="aboutCategoriaTitulo">{categoria.nombre}</h4>
                <div className="aboutTechGrid">
                  {categoria.tecnologias.map((tech) => (
                    <div key={tech.id} className="aboutTechItem">
                      <div className="aboutTechIcono">{tech.icono}</div>
                      <span className="aboutTechNombre">{tech.nombre}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;