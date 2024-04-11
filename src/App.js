// import { Navigation } from "./Navigation";
import { createContext, useState } from "react";

import { Navigation } from "./Navigation";

export const url = "https://deft-valkyrie-f4cfdc.netlify.app/";
// ("http://localhost:3000");

function App() {
  return (
    <div className="main">
      <Navigation />
    </div>
  );
}

export default App;
