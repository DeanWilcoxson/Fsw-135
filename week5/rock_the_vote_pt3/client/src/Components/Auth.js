import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'
import { UserContext } from '../Context/userContext';
// import IssueList from './IssueList';

const initInputs = { username: "", password: "" }

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login } = useContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
    console.log(signup)
  }

  function handleLogin(e){
    e.preventDefault()
    login(inputs)
  }

  return (
    <div className="auth-container">
      <h1>IssueList</h1>
      { !toggle ?
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign up"
          />
          <button onClick={() => setToggle(prev => !prev)}>Already a member?</button>
        </>
      :
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Sign in"
          />
          {console.log(inputs)}
          <button onClick={() => setToggle(prev => !prev)}>Not a member?</button>
        </>
      }
    </div>
  )
}