import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedOutLinks() {
  return (
    <ul className="right">
      <li><NavLink to="/register">Register</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks
