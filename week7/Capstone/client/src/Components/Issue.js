import React from "react";

export default function Issue(props) {
  const { title, description, imgUrl, _id, del, editIssue } = props;

  function delIssue(){
    del(_id)
  }

  return (
    <div className="issue" key={_id} id={_id}>
      <h1 className="issueTitle">{title}</h1>
      <h3 className="issueDesc">{description}</h3>
      <img className="issueImg" src={imgUrl} alt={imgUrl} width={300} />
      <button onClick={() => delIssue()}>Delete</button>
      <button onClick={editIssue}>Edit</button>
    </div>
  );
}
