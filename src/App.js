// import { Navigation } from "./Navigation";
import { createContext, useState } from "react";

import { Navigation } from "./Navigation";

export const url = "https://student-dashboard-z9j4.onrender.com";
// ("http://localhost:3000");

function App() {
  return (
    <div className="main">
      <Navigation />
    </div>
  );
}

export default App;
