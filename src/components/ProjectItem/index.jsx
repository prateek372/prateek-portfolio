import React, { useState } from 'react';
import PropTypes from 'prop-types';

const notHover = {
  minWidth: '120px',
  backgroundColor: '#5fc9f8',
  color: 'white'
}

const onHover = {
  minWidth: '120px',
  backgroundColor: '#4FAED7',
  color: 'white'
}

const ProjectItem = props => {
  const [hover, updateHover] = useState('');

  return (
    <div className="btn btn-sm d-flex flex-column align-items-center justify-content-center py-0 mx-1 mx-lg-0 my-lg-1"
      onClick={() => props.pressed(props.index)}
      onMouseEnter={() => updateHover(props.index)}
      onMouseLeave={() => updateHover('')}
      style={hover === props.index ? onHover : notHover}>
      <label className="m-0 p-1 text-wrap">
        {props.name}
      </label>
      <small className="d-none d-lg-block text-left p-1">
        {props.subtitle}
      </small>
    </div>
  )
}

ProjectItem.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  subtitle: PropTypes.string,
  pressed: PropTypes.func
}

export default ProjectItem;
