import logo from './logo.svg';

//import C01componente from './components/C01componente';
//import P4variable from './components/P4variable';

import { useEffect, useState } from 'react';
import {Route, BrowserRouter as Router, Routes,} from 'react-router-dom';
import Dashboard from './public/Dashboard';
import Home from './public/Home';
import PublicRutas from './ruteo/PublicRutas';

function App() {

  return (
    <div style={{background:"plim"}}>
      <Router>
        <Routes>
         <PublicRutas/>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;