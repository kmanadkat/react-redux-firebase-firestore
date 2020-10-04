import React, {Component} from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {createProject} = this.props;
    if(this.state.title.trim() !== ''){
      createProject(this.state)
      this.props.history.push('/')
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  render() {
    const {auth} = this.props;
    if(!auth.uid && auth.isLoaded){
      return <Redirect to="/login" />
    }
    return (
      <div className="container section">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Project Title</label>
            <input type="text" id="title" onChange={this.handleChange} value={this.state.title} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Description</label>
            <textarea id="content" onChange={this.handleChange} value={this.state.content} className="materialize-textarea"></textarea>
          </div>
          <div className="input-field">
            <button className="waves-effect waves-light btn indigo lighten-1 z-depth-0">Confirm</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);