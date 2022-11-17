import React from "react";
import Landing from "./pages/landing/Landing";
import Error from "./pages/error/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
