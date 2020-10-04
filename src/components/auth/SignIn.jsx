import React, {Component} from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  render() {
    const {authError, auth} = this.props;
    if(auth.uid && auth.isLoaded){
      return <Redirect to='/' />
    }
    if(auth.isLoaded){
      return (
        <div className="container section">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} value={this.state.email} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={this.handleChange} value={this.state.password} />
            </div>
            <div className="input-field">
              <button className="waves-effect waves-light btn indigo lighten-1 z-depth-0">Login</button>
            </div>
            <div className="red-text center">
              {authError && <p>Username/password incorrect!</p>}
            </div>
          </form>
        </div>
      );
    }
    return <p className="center">Loading...</p>
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);