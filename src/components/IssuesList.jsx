import { list } from "../data";
import Issue from "./Issue";

import React from "react";

const IssuesList = () => {
  return (
    <div className="my-5">
      {list.map((item) => (
        <Issue item={item} />
      ))}
    </div>
  );
};

export default IssuesList;
