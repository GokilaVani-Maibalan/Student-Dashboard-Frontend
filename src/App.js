// import { Navigation } from "./Navigation";
import { createContext, useState } from "react";

import { Navigation } from "./Navigation";

export const url = "http://localhost:3001";
// ("http://localhost:3000");

function App() {
  return (
    <div className="main">
      <Navigation />
    </div>
  );
}

export default App;
