import React, { createContext, useState } from "react";
import { ContextT, RepoT } from "../types";

export const Ctx = createContext<ContextT>(undefined);

type Props = {
  children: React.ReactNode;
};

const CtxProvider = ({ children }: Props) => {
  const [singleItem, setSingleItem] = useState<RepoT>();

  const value = {
    singleItem,
    setSingleItem,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export default CtxProvider;
