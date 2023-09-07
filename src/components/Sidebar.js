import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { SiGoogleclassroom, SiTask, SiLetterboxd } from "react-icons/si";
import { RiDashboardFill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { PiCertificateLight } from "react-icons/pi";

import { MdSubject } from "react-icons/md";
import learning from "../assets/online-lesson.png";
import { FiLogOut } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  let navigate = useNavigate();
  return (
    <div className="Apps">
      <motion.div className="sidebar_container">
        <motion.div className="sidebar">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <img
              src={learning}
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            <h3 style={{ color: "black" }}>Student </h3>
          </div>
          <br />
          <div className="groups">
            <div className="group">
              <p className="dash-items" onClick={() => navigate("/class")}>
                <SiGoogleclassroom style={{ marginRight: "10px" }} />
                Class
              </p>
              <p
                className="dash-items"
                onClick={() => navigate("/stu-dashboard")}
              >
                <RiDashboardFill style={{ marginRight: "10px" }} />
                Dashboard
              </p>

              <p className="dash-items" onClick={() => navigate("/task")}>
                <FaTasks style={{ marginRight: "10px" }} />
                Tasks
              </p>
              <p className="dash-items" onClick={() => navigate("/webcode")}>
                <BiCog style={{ marginRight: "10px" }} />
                Webcode
              </p>
              <p className="dash-items" onClick={() => navigate("/capstone")}>
                <SiTask style={{ marginRight: "10px" }} />
                Capstone
              </p>
              <p className="dash-items" onClick={() => navigate("/leave")}>
                <SiLetterboxd style={{ marginRight: "10px" }} />
                Leave-Application
              </p>
              <p className="dash-items" onClick={() => navigate("/portfolio")}>
                <CgWebsite style={{ marginRight: "10px" }} />
                Portfolio
              </p>
              <p
                className="dash-items"
                onClick={() => navigate("/certificate")}
              >
                <PiCertificateLight style={{ marginRight: "10px" }} />
                Certificate
              </p>
              <p className="dash-items" onClick={() => navigate("/syllabus")}>
                <MdSubject style={{ marginRight: "10px" }} />
                Syllabus
              </p>
            </div>
            <button
              className="dash-items"
              style={{ border: "none", backgroundColor: "white" }}
              onClick={() => navigate("/")}
            >
              <FiLogOut style={{ marginRight: "10px" }} />
              Logout
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Sidebar;
