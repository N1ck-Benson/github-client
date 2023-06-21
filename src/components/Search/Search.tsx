import React, { useContext } from "react";
import "./Search.scss";
import { Ctx } from "../CtxProvider";
import { setData } from "../../api";

function Search() {
  const { setList, page, term, setTerm, setShowFilter } = useContext(Ctx);

  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setTerm(value);
  };

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    setData([term, page], setList);
  };

  const toggleFilter = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setShowFilter(true);
  };

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <button onClick={toggleFilter} aria-label="filter">
        filter
      </button>
      <input type="text" placeholder="search" onChange={handleChange} />
      <button type="submit">GO</button>
    </form>
  );
}

export default Search;
