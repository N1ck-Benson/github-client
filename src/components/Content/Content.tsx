import React from "react";
import "./Content.scss";
import CtxProvider from "../CtxProvider";
import Search from "../Search/Search";
import ListView from "../ListView/ListView";
import Filter from "../Filter/Filter";
import SingleView from "../SingleView/SingleView";

function Content() {
  return (
    <CtxProvider>
      <div className="Content">
        {/* Visible content */}
        <Search />
        <ListView />
        {/* Hidden content */}
        <Filter />
        <SingleView />
      </div>
    </CtxProvider>
  );
}

export default Content;
