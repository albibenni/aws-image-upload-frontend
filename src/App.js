import React, { useState, useEffect } from "react";
import "./App.css";
import UserProfiles from "./axios/UserProfiles";

function App() {
  return (
    <div className="App">
      <UserProfiles />;
    </div>
  );
}

export default App;
