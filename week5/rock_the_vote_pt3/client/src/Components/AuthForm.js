import React from "react";
export default function AuthForm(props) {
  const {
    handleSubmit,
    btnText,
    handleChange,
    inputs: { username, password },
  } = props;
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handleChange}
          name="username"
          value={username}
          placeholder="User Name"
        ></input>
        <input
          type="text"
          onChange={handleChange}
          name="password"
          value={password}
          placeholder="Password"
        ></input>
        <button onClick={handleSubmit}>{btnText}</button>
      </form>
    </div>
  );
}
