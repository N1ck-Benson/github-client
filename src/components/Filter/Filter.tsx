import React, { useContext, useState } from "react";
import "./Filter.scss";
import { Ctx } from "../CtxProvider";
import { setData } from "../../api";
import { QueryOrder, QuerySort } from "../../types";

function Filter() {
  const { showFilter, setShowFilter, term, page, setList } = useContext(Ctx);
  const [filter, setFilter] = useState<QuerySort>();
  const [order, setOrder] = useState<QueryOrder>("desc");

  const close = () => setShowFilter(false);

  const handelChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value as QueryOrder;
    const id = target.id as QuerySort | QueryOrder;

    if (id === "asc" || id === "desc") {
      setOrder(value);
      return;
    } else setFilter(filter?.length ? undefined : id);
  };

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    if (!filter) {
      setShowFilter(false);
    } else {
      setData([term, page, filter, order], setList);
    }
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
            <input
              type="checkbox"
              name="stars"
              onChange={handelChange}
              id="stars"
            />
            <label htmlFor="forks">forks</label>
            <input
              type="checkbox"
              name="forks"
              onChange={handelChange}
              id="forks"
            />
            <label htmlFor="updated">last updated</label>
            <input
              type="checkbox"
              name="updated"
              onChange={handelChange}
              id="updated"
            />
            <label htmlFor="open-issues">Open issues</label>
            <input
              type="checkbox"
              name="open-issues"
              onChange={handelChange}
              id="open-issues"
            />
          </fieldset>
          <fieldset name="order" id="order">
            <label htmlFor="asc">asc</label>
            <input
              type="radio"
              name="asc"
              id="asc"
              value="asc"
              onChange={handelChange}
              checked={order === "asc"}
            />
            <label htmlFor="desc">desc</label>
            <input
              type="radio"
              name="desc"
              id="desc"
              value={"desc"}
              onChange={handelChange}
              checked={order === "desc"}
            />
          </fieldset>
          <button type="submit">GO</button>
        </form>
      </div>
    </div>
  );
}

export default Filter;
