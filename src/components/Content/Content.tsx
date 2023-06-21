import React from "react";
import "./Content.scss";
import CtxProvider from "../CtxProvider";

function Content() {
  return (
    <CtxProvider>
      <div className="Content"></div>
    </CtxProvider>
  );
}

export default Content;
