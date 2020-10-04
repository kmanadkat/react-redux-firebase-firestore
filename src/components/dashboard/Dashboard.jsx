import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
import { Scrollbars } from 'react-custom-scrollbars';

class Dashboard extends Component {

  render(){
    const {projects, auth, notifications} = this.props;
    if(!auth.uid && auth.isLoaded){
      return <Redirect to="/login" />
    }
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <Scrollbars style={{height: 528, marginTop:24 }}>
              <ProjectList projects={projects} />
            </Scrollbars>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects', orderBy: ['createdAt', 'desc']},
    {collection: 'notifications', limit: 5, orderBy: ['time', 'desc']}
  ])
)(Dashboard);