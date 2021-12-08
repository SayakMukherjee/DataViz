import React from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';

function App() {
  return (
      <Router>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
  );
}

export default App;
