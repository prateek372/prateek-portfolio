import React, { useState } from 'react';
import ProjectItem from '../components/ProjectItem';
import ProjectDetail from '../components/ProjectDetail';
import projects from '../json/projects.json';

const maxHeight = {
  maxHeight: '80vh',
  overflowX: 'auto',
  overflowY: 'auto'
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const projectButtonPress = index => {
    const targetProj = projects[index]
    setSelectedProject(targetProj)
  }

  return (
    <div className="container">
      <div className="row">

        <div className="col-12 d-lg-none">
          <div className="d-flex flex-column justify-content-center mt-4">
            <label className="text-dark font-weight-light text-center">Projects</label>
            <div className="d-flex" style={maxHeight}>
              {projects.map((project, index) =>
                <ProjectItem
                  key={project.name}
                  index={index}
                  name={project.name}
                  subtitle={project.subtitle}
                  pressed={projectButtonPress}
                />
              )}
            </div>
          </div>
        </div>

        <div className="d-none d-lg-block col-lg-3 col-xl-3">
          <div className="d-flex flex-column mt-4">
            <label className="text-dark font-weight-light">Projects:</label>
            <div className="d-flex flex-column align-items-center" style={maxHeight}>
              {projects.map((project, index) =>
                <ProjectItem
                  key={project.name}
                  index={index}
                  name={project.name}
                  subtitle={project.subtitle}
                  pressed={projectButtonPress}
                />
              )}
            </div>
          </div>
        </div>


        <div className="col-12 col-lg-9 col-xl-9">
          <div className="mt-4">
            <ProjectDetail project={selectedProject} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio;