import React, { useEffect, useState } from "react";
import "./App.scss";
import { RepoListT } from "../../types";
import { getRepoList } from "../../api";
import Content from "../Content/Content";

function App() {
  return (
    <div className="App">
      <nav>nav</nav>
      <Content />
      <footer>footer</footer>
    </div>
  );
}

export default App;
