import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

let currentProjectId = 0;
export const projectActionCreators = {
    addNew(projectName){
        const action = { type : 'PROJECT_ADD_NEW', payload : { id : ++currentProjectId, name : projectName,  createdAt : new Date()}}
        return action;
    }
}

export const Projects = ({projects, addNew}) => {
    const [ newProjectName, setNewProjectName ] = React.useState('');
    return (
        <div>
            <h3>Projects</h3>
            <label>Project Name : </label>
            <input type="text" onChange={evt => setNewProjectName(evt.target.value)} />
            <input type="button" value="Add New" onClick={() => addNew(newProjectName)} />
            <div>
                { 
                    projects.map(project => (<span key={project.id}> [{project.name}] </span>))
                }
            </div>
        </div>
    )
}

function mapStateToProps(storeState){
    const projectsState = storeState.projectsState;
    return { projects : projectsState };
}

function mapDispatchToProps(dispatch){
    const projectActionDispatchers = bindActionCreators(projectActionCreators, dispatch);
    return projectActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);