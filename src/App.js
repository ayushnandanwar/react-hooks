import React from "react"; // to use JSX
import { useState } from "react";

/*
React hooks are the new features introduced in the React 16.8 version.


*/

import Hooks1 from "./Components/Hooks1"; // #29
import Hook2 from "./Components/Hook2";
import Events from "./Components/Events";

import Forms from "./Components/Forms";  // #34 Forms in ReactJs
const App = () => {

  return (
    <>
      <Hooks1/> 
      <Hook2/>
      <Events/>
      <Forms/>
    </>
  );
}

export default App;
