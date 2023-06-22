import React, { useContext, useEffect } from "react";
import "./SingleView.scss";
import { Ctx } from "../CtxProvider";
import ReactMarkdown from "react-markdown";
import { useReadme } from "../../hooks";
import CloseIcon from "@mui/icons-material/Close";

function SingleView() {
  const { singleItem, setSingleItem } = useContext(Ctx);

  const readme = useReadme(singleItem);

  useEffect(() => {
    const body = document.querySelector("body");
    if (singleItem) body!.style.overflow = "hidden";
    else body!.style.overflow = "scroll";
  }, [singleItem]);

  const close = () => setSingleItem(undefined);

  return (
    <div className={`SingleView ${singleItem ? "show" : "hide"}`}>
      <div className="inner">
        {singleItem && (
          <>
            <header>
              <button onClick={close} aria-label="close" className="btn-close">
                <CloseIcon />
              </button>
              <h1>{singleItem.name}</h1>
            </header>
            <h4>{singleItem.owner.login}</h4>
            <div className="metadata">
              <div className="metadata-single">
                <p>forks: {singleItem.forks_count}</p>
              </div>
              <div className="metadata-single">
                <p>stars: {singleItem.stargazers_count}</p>
              </div>
              <div className="metadata-single">
                <p>watchers: {singleItem.watchers}</p>
              </div>
              <div className="metadata-single">
                <p>issues: {singleItem.open_issues}</p>
              </div>
            </div>
            <div className="readme">
              <ReactMarkdown>{readme || "Looking for README..."}</ReactMarkdown>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SingleView;
