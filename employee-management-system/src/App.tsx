import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './pages/loginscreen/loginscreen';
import HomeScreen from './pages/homescreen/homescreen'; 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/homescreen" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
