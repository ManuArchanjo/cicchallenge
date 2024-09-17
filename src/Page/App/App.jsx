import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import PainelGestao from '../PainelGestao';
import Trilhas from '../Trilhas'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route path="/painel-gestao" element={<PainelGestao />} />
        <Route path="/trilhas" element={<Trilhas />} />
      </Routes>
    </Router>
  );
}

export default App;
