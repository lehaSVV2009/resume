import React, {Component} from 'react'

class ResumeNotFound extends Component {
  render() {
    return (
      <div>
        <div>Resume Not Found!</div>
        <div>Please, add resume.json to the root of the project</div>
        <div>The valid format can be found here - https://jsonresume.org/</div>
      </div>
    )
  }
}

export default ResumeNotFound