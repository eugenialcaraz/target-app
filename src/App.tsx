import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, SignIn, SignUp } from "@components/index";
import { Landing, Pages } from "./pages";
import { urlFormat } from "./utils/urlFormat";

const App = () => (
  /*Private routing will be added once main screen is done*/
  <Routes>
    <Route path="/" element={<Landing />}>
      <Route path={urlFormat(Pages.About)} element={<About />} />
      <Route path={urlFormat(Pages.SignIn)} element={<SignIn />} />
      <Route path={urlFormat(Pages.SignUp)} element={<SignUp />} />
    </Route>
  </Routes>
);

export default App;
