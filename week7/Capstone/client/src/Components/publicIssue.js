import { React } from "react";
export default function PublicIssue(props) {
    const { title, description, imgUrl, _id } = props;

  return (
    <div className="publicIssue" key={_id} id={_id}>
      <h1 className="issueTitle">{title}</h1>
      <h3 className="issueDesc">{description}</h3>
      <img className="issueImg" src={imgUrl} alt={imgUrl} width={300} />
    </div>
  );
}
