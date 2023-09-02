import React from "react";
import Sidebar from "./Sidebar";
import { Header } from "./Header";

export const Certificate = () => {
  return (
    <div className="content">
      <Sidebar />
      <div className="head-cont">
        <Header title="Certificate" />
        <p
          style={{
            marginTop: "50px",
            textAlign: "center",
            fontWeight: "600",
            fontSize: "x-large",
            color: "#001B48",
          }}
        >
          Your Certificate is not yet Generated
        </p>
      </div>
    </div>
  );
};
