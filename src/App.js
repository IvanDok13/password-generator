import React from "react";

import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";


import './App.css';

function App() {
  return (
    <div className="App">
      <Button type="button"> 
        <span>Button</span>
      </Button>
      <Checkbox></Checkbox>
    </div>
  );
}

export default App;
