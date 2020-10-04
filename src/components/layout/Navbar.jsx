import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function Navbar({auth, profile}) {
  const links = auth.uid !== undefined ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-4">
        <div className="container">
          <Link to="/" className="brand-logo">Luigi Project</Link>
          {auth.isLoaded && links}
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
