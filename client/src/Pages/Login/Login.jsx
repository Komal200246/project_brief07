import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";

function Login() {
  return (
    <div className="login-page">

      <div className="login-card">

        <PageTitle
          eyebrow="WELCOME BACK"
          description="Sign in to access your Job Portal account."
        >
          Sign In
        </PageTitle>

        <form>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <Button type="submit">
            Sign In
          </Button>

        </form>

        <p className="login-footer">
          Don't have an account? Create one to get started.
        </p>

      </div>

    </div>
  );
}

export default Login;