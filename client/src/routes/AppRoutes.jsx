import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Jobs from "../pages/Jobs/Jobs";
import Companies from "../pages/Companies/Companies";
import NotFound from "../pages/NotFound/NotFound";
import JobPostingForm from "../pages/JobPosting/JobPosting";

function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/jobs"
        element={<Jobs />}
      />

      <Route
        path="/companies"
        element={<Companies />}
      />

      <Route
        path="/post-job"
        element={<JobPostingForm />}
      />

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default AppRoutes;