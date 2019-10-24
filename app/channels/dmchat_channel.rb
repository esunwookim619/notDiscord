class DmchatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'dmchat_channel'
  end

  def speak(data)
    dm = Dm.create(body: data['body'], author_id: data['author_id'], receiver_id: data['receiver_id'], dmchannel_id: data['dmchannel_id'])
    socket = { id: dm.id, dmchannel_id: dm.dmchannel_id, body: dm.body, author_id: dm.author_id, receiver_id: dm.receiver_id}
    DmchatChannel.broadcast_to('dmchat_channel', socket)
    
    dmchannel = Dmchannel.find_by(id: params[:currentdmchannelId])
    userId = data['receiver_id']
    user = User.find_by(id: userId)
    socket2 = { id: user.id, email: user.email, username: user.username, online: user.online }
    OnlineChannel.broadcast_to('online_channel', socket2)
  end

  

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end