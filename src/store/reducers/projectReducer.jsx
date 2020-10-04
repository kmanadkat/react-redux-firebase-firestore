import { CREATE_PROJECT_SUCCESS, CREATE_PROJECT_ERROR } from '../actions/projectActions';

const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'Super Mario Bros. is divided into eight worlds, each of them containing four levels.'},
    {id: '2', title: 'collect all the coins', content: 'There are also pipes along the way, some of which Mario can enter to visit various secret coin rooms before returning to the level.'},
    {id: '3', title: 'egg hunt with mario', content: 'If regular Mario takes a hit, falls down a pit, or if the Time Limit runs out, he loses a life and restarts the level.'}
  ],
}

const projectReducer = (state = initState, action) => {
  switch(action.type){
    case CREATE_PROJECT_SUCCESS:
      console.log('Created Project: ', action.project)
      return state
    case CREATE_PROJECT_ERROR:
      console.error(action.err);
      return state;
    default:
      return state;
  }
}

export default projectReducer