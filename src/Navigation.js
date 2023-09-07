import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Class } from "./components/Class";
import { Tasks } from "./components/Tasks";
import { Webcode } from "./components/Webcode";
import { Capstone } from "./components/Capstone";
import { Leave } from "./components/Leave";
import { Dashboard } from "./components/Dashboard";
import { Portfolio } from "./components/Portfolio";
import { Certificate } from "./components/Certificate";
import { Syllabus } from "./components/Syllabus";
import { Home } from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
export const Navigation = () => {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/class" element={<Class />} />
          <Route path="/task" element={<Tasks />} />
          <Route path="/capstone" element={<Capstone />} />
          <Route path="/webcode" element={<Webcode />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/stu-dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
