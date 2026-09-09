import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="logo">
          <span className="logo-icon">J</span>
          <span>Job Portal</span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/dashboard">
            Dashboard
          </NavLink>

          <NavLink to="/profile">
            Profile
          </NavLink>

          <NavLink to="/login">
            Login
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;