/* import { Navigate } from 'react-router-dom';

export const RutaPublica = ({ children }) => {
  return children;
};

export const RutaPrivada = ({ children }) => {
  const estaAutenticado = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  if (!estaAutenticado()) {
    return <Navigate to="/inicio" replace />;
  }

  return children;
};

export default RutaPublica; */