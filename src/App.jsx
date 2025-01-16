// import React from 'react';
import AppRoutes from './routes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <AppRoutes /> {/* Use the routing component */}
    </div>
  );
}

export default App;