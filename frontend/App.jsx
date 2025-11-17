import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="flex-1 p-4">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
