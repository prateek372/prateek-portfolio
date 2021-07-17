import React from 'react'
import resume from '../json/resume.json'

const style = {
  height: '80vh',
  width: '100%'
}
const Resume = () => {
  return (
    <div className="container vh-75">
      <div className="row mt-2 pb-5">
        <div className="embed-responsive embed-responsive-4by3 z-depth-1-half" style={style}>
          <iframe className="embed-responsive-item" src={resume[0].link} title="Prateek Kumar" />
        </div>

        {/* <div className="btn btn-primary bt-sm mt-1 mb-5" href={resume[0].download}>Download</div> */}
      </div>
    </div>
  )
}

export default Resume
