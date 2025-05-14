import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from '../App';
import PoemGenerator from '../components/poam/Poem';
import './Navbar.css';
import Paraphrase from '../components/paraphrase/Paraphrase';

const AppRoutes = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <i className="fas fa-magic"></i>Technical Assessment Part 1
          </Link>
          <div className="navbar-menu">
            <Link to="/paraphrase" className="navbar-link">
              <i className="fas fa-exchange-alt"></i> Text Paraphraser
            </Link>
            <Link to="/poem-generator" className="navbar-link">
              <i className="fas fa-pen-fancy"></i> Poem Generator
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/paraphrase" element={<Paraphrase />} />
        <Route path="/poem-generator" element={<PoemGenerator />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
