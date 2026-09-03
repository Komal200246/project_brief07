import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login/Login";
import Dashboard from "../pages/Home/Dashboard/Dashboard";
import Profile from "../pages/Home/Profile/Profile";
import NotFound from "../pages/Home/Notfound/Notfound";

function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
      
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="/login" element={<Login />} />

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;