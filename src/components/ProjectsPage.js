import React, {Component} from 'react'

import ProjectItem from './ProjectItem'

export default class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <p className='headline'>Projects</p>
        {
          Array.isArray(this.props.work) && 
          this.props.work.map((job) => {
            if (!job || !Array.isArray(job.projects)) {
              return (<span/>)
            }
            return job.projects.map((project, index) => (
              <ProjectItem 
                key={index}
                project={project}
              />
            ))
          })
        }
      </div>
    )
  }
}