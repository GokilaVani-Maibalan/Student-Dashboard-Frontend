import React from "react";
import Sidebar from "./Sidebar";
import { Header } from "./Header";
import Table from "@mui/material/Table";
import { TableCell } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import syllabus from "../assets/Sample Syllabus.pdf";
export const Syllabus = () => {
  return (
    <div className="content">
      <Sidebar />
      <div className="head-cont">
        <Header title="Syllabus" />
        <div className="table-data">
          <div
            style={{
              display: "flex",
              gap: "300px",
              backgroundColor: "#c7d8f6",
              color: "#001B48",
              padding: "15px",
              fontWeight: "bolder",
            }}
          >
            <h5>Course</h5>
            <h5>Syllabus</h5>
          </div>
          <div style={{ display: "flex", gap: "290px" }}>
            <p>FSD-MERN</p>
            <a
              href={syllabus}
              target="_blank"
              download
              style={{ cursor: "pointer" }}
            >
              Download
            </a>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};
