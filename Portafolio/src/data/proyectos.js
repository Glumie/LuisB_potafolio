import PSMB from '../assets/img/PSM/PSMB.webp';
import PSMW from '../assets/img/PSM/PSMW.webp';
import psmLogIn from '../assets/img/PSM/psmLogIn.webp';
import tallerCap1 from '../assets/img/TallerJLP/cap1.webp';
import tallerCap2 from '../assets/img/TallerJLP/cap2.webp';
import tallerCap3 from '../assets/img/TallerJLP/cap3admin.webp';
import lrHome from '../assets/img/LoveRequest/home.webp';
import lrPricing from '../assets/img/LoveRequest/pricing.webp';
import lrUser from '../assets/img/LoveRequest/user.webp';

const proyectosData = [
  {
    id: 1,
    titulo: 'Puntarenas Se Mueve (PSM)',
    descripcionKey: 'projects.psm.descripcion',
    tags: ['REACT 19', 'TAILWIND', 'DJANGO', 'MYSQL', 'MONGODB', 'JWT', 'N8N'],
    categoria: 'desarrollo',
    estado: 'publicado',
    url: 'https://psm.luismidev.com/',
    imagenes: [PSMB, PSMW, psmLogIn]
  },
  {
    id: 2,
    titulo: 'Taller JPL',
    descripcionKey: 'projects.taller.descripcion',
    tags: ['REACT 19', 'BOOTSTRAP', 'SWEETALERT2', 'JSPDF', 'JSON SERVER'],
    categoria: 'desarrollo',
    estado: 'publicado',
    url: 'https://taller.luismidev.com/',
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