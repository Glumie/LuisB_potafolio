import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import PaginaNoEncontrada from '../pages/NotFound';

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Navigate to="/" replace />} />
          <Route path="*" element={<PaginaNoEncontrada />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;