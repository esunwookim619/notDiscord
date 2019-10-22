@dmchannels.each do |dmchannel|
  json.set! dmchannel.id do
    json.partial! 'dmchannel', dmchannel: dmchannel
  end
end