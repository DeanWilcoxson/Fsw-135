import React, { useEffect } from "react";
import PublicIssue from "./publicIssue";

export default function PublicIssueList(props) {
  const { get, issues } = props;
  useEffect(() => {
    get();
  }, []);
  return (
    <div>
      {issues.map((issue) => (
        <PublicIssue {...issue} key={issue._id} />
      ))}
    </div>
  );
}
