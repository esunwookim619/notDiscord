import React from 'react';

const ServerOptionsContainer = props => {
  
  if (props.props.currentUserId !== props.props.server.admin_id) {
    return (<div></div>) //double check later
  } else if (props.props.servers.length === 1) {
    return (
      <div>
        <div className="delete"><div className="deletemsg">Cannot delete!</div></div>
        <div className="edit" onClick={() => props.props.editModal("edit server")}><div className="editmsg">Change name</div></div>
      </div>
    )
  } else {
  return (
    <div>
      <div className="delete" onClick={() => props.props.deleteServer(props.props.server.id).then(() => props.props.history.push("/channels/@me"))}><div className="deletemsg">Delete server</div></div>
      <div className="edit" onClick={() => props.props.editModal("edit server")}><div className="editmsg">Change name</div></div>    
    </div>
  )}
}

export default ServerOptionsContainer;