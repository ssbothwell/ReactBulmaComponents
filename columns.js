import React from 'react';

const Columns = (props) => {
  return (
          <div className={ props.cls ? 'columns '.concat(props.cls) : 'columns'}
               style={props.style} >
          {props.children}
          </div>
        )
}

export default Columns
