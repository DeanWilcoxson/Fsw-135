import React from "react";

export default function Issue(props) {
  const { title, description, imgUrl, _id } = props;
  return (
    <div className="issue" key={_id}>
      <h1 className="issueTitle">{title}</h1>
      <h3 className="issueDesc">{description}</h3>
      <img className="issueImg" src={imgUrl} alt={imgUrl} width={300} />
    </div>
  );
}
