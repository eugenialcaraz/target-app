import React from "react";
import { Landing } from "./pages";
import { SignIn, About } from "@components/index";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    /*Private routing will be added once main screen is done*/
    <>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
