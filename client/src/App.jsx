import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import Jobs from "./Pages/Jobs/Jobs";
import Companies from "./Pages/companies/Companies";
import JobPostingForm from "./Pages/JobPosting/JobPosting";

export default function App() {
  return (
    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/login" element={<Login />} />

          <Route path="/jobs" element={<Jobs />} />

          <Route path="/companies" element={<Companies />} />

          <Route path="/post-job" element={<JobPostingForm />} />

          <Route
            path="*"
            element={<h2>404 Page Not Found</h2>}
          />

        </Routes>

      </MainLayout>

    </BrowserRouter>
  );
}