import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

function SignedInLinks(props) {

  return (
    <ul className="right">
      <li><NavLink to="/create-project">New Project</NavLink></li>
      <li><a href="#0" onClick={props.signOut}>Logout</a></li>
      <li><NavLink to="/" className="btn btn-floating indigo lighten-1">{props.profile.initials}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
