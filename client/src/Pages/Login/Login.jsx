import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <h2>Portal Sign In</h2>
      <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Sign in to apply for jobs or manage job postings.</p>

      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="user@example.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>

        <button type="submit" className="login-btn">Sign In</button>
      </form>
    </div>
  );
}