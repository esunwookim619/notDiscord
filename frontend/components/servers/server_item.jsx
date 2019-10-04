import React from 'react';

const ServerItem = props => {
  let first = props.server.server_name[0];
  if (first.toUpperCase() != first.toLowerCase() ){
    first = first.toUpperCase();
  } 
 
  return (
  <div>
      <button onClick={() => props.deleteServer(props.server.id)} className="serverbutton">{first}</button>
    
  </div>
  )
}

export default ServerItem;