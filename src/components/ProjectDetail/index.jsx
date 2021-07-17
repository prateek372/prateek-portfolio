import React from 'react'
import PropTypes from 'prop-types'
import TechListItem from '../TechListItem'

const githubDir = `/react-portfolio`
const imgSize = {
  height: '100%',
  width: '100%'
}

const ProjectDetail = props => {
  return (
    <div className="  pb-5 mb-5 pb-sm-0 mb-sm-0">
      <div className="row">
        {/* title and description */}
        <div className="col-12">
          <div className="d-none d-sm-block display-4 text-center">{props.project.name}</div>
          <div className="d-block d-sm-none h3 text-center">{props.project.name}</div>
          <hr />
          <p className="mt-2">{props.project.description}</p>
          {props.project.note ? <p className="mt-2">{props.project.note}</p> : ``}
          <hr className="d-block" />
        </div>

        {/* screenshot */}
        <div className="col-12 col-md-6 col-lg-7">
          <div className="shadow rounded p-2">
            <label className="font-weight-light">Screenshot</label>
            <img style={imgSize} alt={`${props.project.name} screenshot`} src={`${githubDir}${props.project.imgURL}`} />
          </div>
        </div>

        {/* links and tech stack list */}
        <div className="col-12 col-md-6 col-lg-5">
          {/* links */}
          <div className="mb-sm-2 shadow rounded p-2">
            <label className="font-weight-light">Links:</label>
            <div className="d-flex flex-column align-items-center">
              {props.project.link ? (
                <a className="my-1 btn btn-primary w-75" rel="noopener noreferrer" href={props.project.link} target="_blank">
                  <div className="d-flex justify-content-center align-items-center">
                    <i className="fas fa-window-maximize"></i>
                    <p className="p-0 my-0 ml-2">Application</p>
                  </div>
                </a>
              ) : (
                ``
              )}

              <a className="my-1 btn btn-info w-75" rel="noopener noreferrer" href={props.project.github} target="_blank">
                <div className="d-flex justify-content-center align-items-center">
                  <i className="fab fa-github-square"></i>
                  <p className="p-0 my-0 ml-2">GitHub Page</p>
                </div>
              </a>
            </div>
          </div>

          {/* tech stack  */}
          <div className="mb-sm-2 shadow rounded p-2">
            <label className="font-weight-light">Technologies:</label>
            <div className="">{props.project.technologies ? props.project.technologies.map(tech => <TechListItem key={tech.name} name={tech.name} icon={tech.icon} type={tech.type} />) : ``}</div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  )
}

ProjectDetail.propTypes = {
  project: PropTypes.object,
  children: PropTypes.node
}

export default ProjectDetail
