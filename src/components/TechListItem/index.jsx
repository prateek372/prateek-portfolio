import React from 'react';

const TechListItem = (props) => {

  const color = ((type) => {
    switch (type) {
      case 'language':
        return {
          backgroundColor: '#53d769',
          color: 'white'
        };
      case 'framework':
        return {
          backgroundColor: '#fd9426',
          color: 'white'
        };
      case 'tool':
        return {
          backgroundColor: '#fecb2e',
          color: 'white'
        };
      default:
        break;
    }

  })(props.type)

  return (
    <div className="badge p-1 mx-1"
      key={props.name}
      style={color}>
      <i className={`${props.icon} mr-2`} />
      {props.name}
    </div>
  )
}

export default TechListItem;