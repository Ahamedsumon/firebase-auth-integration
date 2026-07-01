import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Please Login!</h1>
        <form>
          <fieldset className="fieldset">
            {/* Email Field */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* Password Field */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p>
          New to our website? Please{" "}
          <Link
            className="text-blue-500 hover:text-blue-600 hover:underline"
            to="/register"
          >
            register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
