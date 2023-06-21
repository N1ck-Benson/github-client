import { useEffect, useState } from "react";
import { UseReadmeT } from "./types";
import { getReadmeForRepo } from "./api";

export const useReadme: UseReadmeT = (singleItem) => {
  const [readme, setReadme] = useState<string>();

  useEffect(() => {
    if (singleItem) {
      getReadmeForRepo(singleItem.id)
        .then((string) => setReadme(string))
        .catch((err) => console.log(err));
    }
  }, [singleItem]);

  return readme;
};
