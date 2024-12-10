import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./ScreenComponents/Home";
import { Error } from "./ScreenComponents/Error";
import { Wall } from "./ScreenComponents/Wall";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wall" element={<Wall />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
