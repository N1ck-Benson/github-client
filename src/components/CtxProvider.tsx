import React, { createContext, useEffect, useState } from "react";
import { ContextT, RepoListT, RepoT } from "../types";

export const Ctx = createContext<ContextT>({} as ContextT);

type Props = {
  children: React.ReactNode;
};

const CtxProvider = ({ children }: Props) => {
  const [singleItem, setSingleItem] = useState<RepoT>();
  const [list, setList] = useState<RepoListT>();
  const [page, setPage] = useState<number>(1);
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    console.log(list);
  }, [list]);

  const value = {
    singleItem,
    setSingleItem,
    list,
    setList,
    page,
    setPage,
    term,
    setTerm,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export default CtxProvider;
