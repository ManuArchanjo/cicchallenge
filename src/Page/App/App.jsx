import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import PainelGestao from '../PainelGestao';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route path="/painel-gestao" element={<PainelGestao />} />
      </Routes>
    </Router>
  );
}

export default App;
