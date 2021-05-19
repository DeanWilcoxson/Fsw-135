import React from "react";
import Issue from "./Issue.js";

export default function IssueList(props) {
  const { issues } = props;
  console.log(issues);
  return (
    <div>
      {issues.userIssues.map((issues) => (
        <Issue {...issues} key={issues._id} />
      ))}
    </div>
  );
}
