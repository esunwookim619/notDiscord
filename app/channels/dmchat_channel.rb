class DmchatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'dmchat_channel'
  end

  def speak(data)
    dm = Dm.create(body: data['body'], author_id: data['author_id'], dmchannel_id: data['dmchannel_id'])
    socket = { id: dm.id, dmchannel_id: dm.dmchannel_id, body: dm.body, author_id: dm.author_id }
    DmchatChannel.broadcast_to('dmchat_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end