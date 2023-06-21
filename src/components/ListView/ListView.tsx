import React, { useContext } from "react";
import "./ListView.scss";
import { Ctx } from "../CtxProvider";

function ListView() {
  const { list } = useContext(Ctx);

  return (
    <div className={`ListView ${!list || list.length === 0 ? "empty" : ""}`}>
      <table>
        {list?.map((item, i) => (
          <tr key={`list_item-${i}`}>
            <a href={item.html_url}>link</a>
            <p>{item.name}</p>
            <p>{item.owner.login}</p>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ListView;
