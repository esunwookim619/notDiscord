import React from 'react';

const ServerOptionsContainer = props => {
  return (
    <div>
      <div className="delete" onClick={() => props.props.deleteServer(props.props.server.id)}><div className="deletemsg">Delete server</div></div>
      <div className="edit" onClick={() => props.props.editModal("edit server")}><div className="editmsg">Change name</div></div>    
    </div>
  )
}

export default ServerOptionsContainer;