
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Experience from './components/Experience';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home/>} />
          {/* <Route path="/experience" element={<Experience/>} /> */}
          <Route path="/projects" element={<Projects/>} />
          <Route path="/aboutme" element={<AboutMe/>} />
      </Routes>
    </Router>
  );
}

export default App;