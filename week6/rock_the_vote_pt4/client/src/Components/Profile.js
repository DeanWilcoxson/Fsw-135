import React, { useContext } from 'react'
import IssueForm from './IssueForm.js'
import IssueList from './IssueList.js'
import { UserContext } from '../Context/userContext.js'

export default function Profile(){
  const { 
    user: { 
      username 
    }, 
    addIssue, 
    issues 
  } = useContext(UserContext)

  return (
    <div className="profile">
      <h1 className="profileUserName">Welcome {username}!</h1>
      <h3 className="userPost">Add an Issue</h3>
      <IssueForm addIssue={addIssue}/>
      <h3 className="userIssues">Your issues</h3>
      <IssueList issues={issues}/>
    </div>
  )
}