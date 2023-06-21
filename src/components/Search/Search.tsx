import React, { useContext, useState } from "react";
import "./Search.scss";
import { Ctx } from "../CtxProvider";
import { setData } from "../../api";

function Search() {
  const [term, setTerm] = useState<string>("");
  const { setList, page } = useContext(Ctx);

  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setTerm(value);
  };

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    setData([term, page], setList);
  };

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input type="text" placeholder="search" onChange={handleChange} />
      <button type="submit">GO</button>
    </form>
  );
}

export default Search;
