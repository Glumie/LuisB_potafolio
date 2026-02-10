import PSMB from '../assets/img/PSM/PSMB.png';
import PSMW from '../assets/img/PSM/PSMW.png';
import psmLogIn from '../assets/img/PSM/psmLogIn.png';
import tallerCap1 from '../assets/img/TallerJLP/cap1.png';
import tallerCap2 from '../assets/img/TallerJLP/cap2.png';
import tallerCap3 from '../assets/img/TallerJLP/cap3admin.png';
import lrHome from '../assets/img/LoveRequest/home.png';
import lrPricing from '../assets/img/LoveRequest/pricing.png';
import lrUser from '../assets/img/LoveRequest/user.png';

const proyectosData = [
  {
    id: 1,
    titulo: 'Puntarenas Se Mueve (PSM)',
    descripcionKey: 'projects.psm.descripcion',
    tags: ['REACT 19', 'TAILWIND', 'DJANGO', 'MYSQL', 'MONGODB', 'JWT', 'N8N'],
    categoria: 'desarrollo',
    estado: 'publicado',
    imagenes: [PSMB, PSMW, psmLogIn]
  },
  {
    id: 2,
    titulo: 'Taller JLP',
    descripcionKey: 'projects.taller.descripcion',
    tags: ['REACT 19', 'BOOTSTRAP', 'SWEETALERT2', 'JSPDF', 'JSON SERVER'],
    categoria: 'desarrollo',
    estado: 'publicado',
    imagenes: [tallerCap1, tallerCap2, tallerCap3]
  },
  {
    id: 3,
    titulo: 'Love Request',
    descripcionKey: 'projects.loverequest.descripcion',
    tags: ['REACT', 'VITE', 'CSS'],
    categoria: 'desarrollo',
    estado: 'proximo',
    imagenes: [lrHome, lrPricing, lrUser]
  }
];

export default proyectosData;