import React from 'react';


const Message = (props) => {
  const header = props.header;
  const del = props.del || false;
  const cls = 'message '.concat(props.color, ' ', props.cls);
  const clickHandler = props.clickHandler || undefined;
  let hidden;
  if (props.hidden === true) {
    hidden = { display: 'none',
               width: '50%',
               margin: '1.5rem auto'
             }
  } else {
    hidden = { display: 'block',
               width: '50%',
               margin: '1.5rem auto'
             }
  }

  return <article className={cls} style={hidden}>
           <div className="message-header">
             <p>{header}</p>
             { del && <button className="delete" 
                              aria-label="delete"
                              onClick={clickHandler}>
               </button> }
           </div>
           <div className="message-body">
             {props.children}
           </div>
         </article>
}

export default Message
