import React from 'react';


const Field = (props) => {
  const label = props.label;
  const help = props.help;
  const cls = 'field '.concat(props.cls, ' ', props.color)
  return (
          <div className={cls}>
          {label && 
            <label className="label is-small">
              <p style={props.style}>{label}</p>
            </label>}
            <div className='control'>
              {props.children}
            </div>
            {help &&
              <p className={'help '.concat(props.color)}>{help}</p>
            }
          </div>
        )
}

export default Field
