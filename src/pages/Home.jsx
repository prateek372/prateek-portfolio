import React from 'react'
import aboutMe from '../json/about-me.json'

const githubDir = `.`

const Home = () => {
  const content = aboutMe ? aboutMe[0] : {}
  return (
    <div className="pb-5 mb-5 pb-sm-0 mb-sm-0">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="d-flex justify-content-center mt-2">
                <img className="rounded-circle py-2 px-2 w-100 h- " alt="profile" src={`${githubDir}/assets/images/profile.jpeg`} />
              </div>
            </div>

            <div className="col-12 col-md-9">
              <div className="d-flex flex-column mt-2">
                <div className="text-center display-4">
                  Prateek Kumar
                  <div className="px-0 py-100">
                    <hr className="w-25 h-25"></hr>
                  </div>
                </div>
                <div className="text-center py-2 pt-2">
                  Software Engineer |{' '}
                  <em>
                    <strong>'If at first you don’t succeed; call it version 1.0'</strong>
                  </em>
                </div>
                {/* Body from JSON */}
                <div className="py-2">
                  <div className="pt-2">
                    <p className="text-justify">{content.background1}</p>
                    <p className="text-justify">{content.background2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr className="w-25 my-0 py-0"></hr>

          <div className="row col-12">
            <div className="col-12">
              <div className="d-flex justify-content-center">{/* <label className="h4">Skills</label> */}</div>
            </div>

            <div className="col-12 col-md-4">
              <div className="d-flex flex-column align-items-center p-2 shadow rounded">
                <label className="text-center text-md-left font-weight-light">Languages</label>
                <ul className="list-group list-group-flush w-100">
                  {content.languages.map(lang => (
                    <li className="list-group-item" key={lang.name} type={lang.type} icon={lang.icon} name={lang.name}>
                      <i className={`${lang.icon} mr-2`} />
                      {lang.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="d-flex flex-column align-items-center p-2 shadow rounded">
                <label className="text-center text-md-left font-weight-light">Tools</label>
                <ul className="list-group list-group-flush w-100">
                  {content.tools.map(tool => (
                    <li className="list-group-item" key={tool.name} type={tool.type} icon={tool.icon} name={tool.name}>
                      <i className={`${tool.icon} mr-2`} />
                      {tool.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="d-flex flex-column align-items-center p-2 shadow rounded">
                <label className="text-center text-md-left font-weight-light">Framework/Libraries</label>
                <ul className="list-group list-group-flush w-100">
                  {content.libraries.map(lib => (
                    <li className="list-group-item" key={lib.name} type={lib.type} icon={lib.icon} name={lib.name}>
                      <i className={`${lib.icon} mr-2`} />
                      {lib.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
