import { useState } from 'react';
import viteLogo from '/vite.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreateCrewmate from './pages/CreateCrewmate';
import SummaryPage from './pages/SummaryPage';
import EditCrewmate from './pages/EditCrewmate';
import CrewmateDetail from './pages/CrewmateDetail';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SummaryPage />} />

        <Route path='/create' element={<CreateCrewmate />} />

        <Route path='/edit/:id' element={<EditCrewmate />} />

        <Route path='/detail/:id' element={<CrewmateDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
