import React, { useEffect, useState } from "react";
import "./App.scss";
import { RepoListT } from "../../types";
import { getRepoList } from "../../api";

function App() {
  const [list, setList] = useState<RepoListT>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getRepoList("example", 1)
      .then((res) => {
        console.log(res);
        if (res) setList(res);
      })
      .catch((err) => setError(err));
  }, []);
  return <div className="App">hello world</div>;
}

export default App;
