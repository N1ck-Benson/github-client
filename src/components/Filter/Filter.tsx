import React, { useContext, useState } from "react";
import "./Filter.scss";
import { Ctx } from "../CtxProvider";
import { setData } from "../../api";
import { QueryOrder, QuerySort } from "../../types";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

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
    } else setFilter(id);
  };

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    if (!filter || !term?.length) {
      setShowFilter(false);
    } else {
      setData([term, page, filter, order], setList);
      setShowFilter(false);
    }
  };

  const makeSentenceCase = (string: string) =>
    string.slice(0, 1).toUpperCase() + string.slice(1);

  return (
    <div className={`Filter ${showFilter ? "show" : "hide"}`}>
      <div className="inner">
        <header>
          <button onClick={close} aria-label="close" className="btn-close">
            <CloseIcon />
          </button>
          <h1>Filters</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <fieldset id="sort">
            <ButtonGroup variant="contained" className="filter_group">
              {["stars", "forks", "updated", "open-issues"].map(
                (criterion, i) => (
                  <div className="input_wrapper" key={`criterion_${i}`}>
                    <label htmlFor="stars">{makeSentenceCase(criterion)}</label>
                    <Checkbox
                      aria-label={makeSentenceCase(criterion)}
                      name={criterion}
                      onChange={handelChange}
                      id={criterion}
                      checked={filter === criterion}
                    />
                  </div>
                )
              )}
            </ButtonGroup>
          </fieldset>
          <br />
          <fieldset name="order" id="order">
            <ButtonGroup variant="contained" className="order_group">
              {["asc", "desc"].map((type, i) => (
                <div className="input_wrapper" key={`${type}_${i}`}>
                  <label htmlFor={type}>
                    {makeSentenceCase(type) + "ending"}
                  </label>
                  <input
                    type="radio"
                    name={type}
                    id={type}
                    value={type}
                    onChange={handelChange}
                    checked={order === type}
                  />
                </div>
              ))}
            </ButtonGroup>
          </fieldset>
          <br />
          <Button type="submit" variant="contained">
            Apply
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Filter;
