import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from '../pages/Inicio';

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/inicio' />} />
          <Route path='/inicio' element={<Inicio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;