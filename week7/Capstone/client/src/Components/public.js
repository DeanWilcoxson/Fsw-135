import React, { useContext } from "react";
import PublicIssueList from "./publicIssuelist";
import IssueForm from "./IssueForm";
import { UserContext } from "./../Context/userContext";
export default function Public() {
  const { addIssue, getIssues, issues } = useContext(UserContext);
  return (
    <div className="public">
      <IssueForm addIssue={addIssue} getIssues={getIssues} />
      <PublicIssueList get={getIssues} issues={issues} />
    </div>
  );
}
