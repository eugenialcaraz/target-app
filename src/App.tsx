import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages";
import { SignIn, About } from "@components/index";

const App = () => (
  /*Private routing will be added once main screen is done*/
  <Routes>
    <Route path="/" element={<Landing />}>
      <Route path="sign-in" element={<SignIn />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
);

export default App;
