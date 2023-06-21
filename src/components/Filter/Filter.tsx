import React, { useContext } from "react";
import "./Filter.scss";
import { Ctx } from "../CtxProvider";

function Filter() {
  const { showFilter, setShowFilter } = useContext(Ctx);

  const close = () => setShowFilter(false);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    const target = e.target;
    console.log(target);
    // setData([term, page], setList);
  };

  return (
    <div className={`Filter ${showFilter ? "show" : "hide"}`}>
      <div className="inner">
        <header>
          <button onClick={close} aria-label="close" className="btn-close">
            ✖️
          </button>
          <h1>Filters</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <fieldset id="sort">
            <label htmlFor="stars">stars</label>
            <input type="checkbox" name="stars" id="stars" />
            <label htmlFor="forks">forks</label>
            <input type="checkbox" name="forks" id="forks" />
            <label htmlFor="updated">last updated</label>
            <input type="checkbox" name="updated" id="updated" />
            <label htmlFor="open-issues">Open issues</label>
            <input type="checkbox" name="open-issues" id="open-issues" />
          </fieldset>
          <fieldset name="order" id="order">
            <label htmlFor="asc">asc</label>
            <input type="radio" name="asc" id="asc" />
            <label htmlFor="desc">desc</label>
            <input type="radio" name="desc" id="desc" />
          </fieldset>
          <button type="submit">GO</button>
        </form>
      </div>
    </div>
  );
}

export default Filter;
