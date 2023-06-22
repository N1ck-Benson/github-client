import React, { useContext } from "react";
import "./ListView.scss";
import { Ctx } from "../CtxProvider";
import { PER_PAGE, setData } from "../../api";

function ListView() {
  const { list, setList, page, term, setSingleItem } = useContext(Ctx);

  const handlePage = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLButtonElement;
    const { id } = target;
    let nextPage = id === "forward" ? page + 1 : id === "back" ? page - 1 : +id;
    setData([term, nextPage], setList);
  };

  const handleSelection = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLButtonElement;
    const { id } = target;
    const item = list![+id.replace("list_item-", "")];
    setSingleItem(item);
  };

  return (
    <div className={`ListView ${!list || list.length === 0 ? "empty" : ""}`}>
      <div className="inner">
        <table>
          <tbody>
            {list?.map((item, i) => (
              <tr key={`list_item-${i}`} onClick={handleSelection}>
                <a href={item.html_url}>link</a>
                <p>{item.name}</p>
                <p>{item.owner.login}</p>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {list && list.length === PER_PAGE && (
        <div className="pagination">
          {["back", page - 1, page, page + 1, "forward"].map((action) => (
            <button id={action.toString()} onClick={handlePage}>
              {action}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListView;
