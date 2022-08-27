import { list } from "../data";
import Issue from "./Issue";

import React from "react";

const IssuesList = () => {
  return (
    <div className="my-3">
      {list.map((item) => (
        <Issue key={item.id} item={item} />
      ))}
    </div>
  );
};

export default IssuesList;
