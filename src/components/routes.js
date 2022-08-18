import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import LandingLayout from './landing';

const RootRoutes = () => (
  <div className='root-container'>
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingLayout />} />
      </Routes>
    </Router>
  </div>
);

export default RootRoutes;
