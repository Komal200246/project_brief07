import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <div className="logo-badge">J</div>
        <span className="logo-text">Job Portal</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
        </li>
        <li>
          <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>Profile</Link>
        </li>
        <li>
          <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}