class OnlineChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'online_channel'
  
    user = User.find_by(id: params[:currentUserId])
   
    user.inserver
    socket = { id: user.id, email: user.email, username: user.username, online: user.online }
    
   
    OnlineChannel.broadcast_to('online_channel', socket)

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stream_for 'online_channel'
    user = User.find_by(id: params[:currentUserId])
    user.leaveserver
    
    socket = { id: user.id, email: user.email, username: user.username, online: user.online }

    OnlineChannel.broadcast_to('online_channel', socket)
  end
end