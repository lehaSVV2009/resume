import React, {Component} from 'react'

import ProjectItem from './ProjectItem'

export default class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <p className='headline'>Jobs</p>
        {
          Array.isArray(this.props.projects) && 
          this.props.projects.map((project, index) => (
            <ProjectItem 
              key={index}
              project={project}
            />
          ))
        }
      </div>
    )
  }
}