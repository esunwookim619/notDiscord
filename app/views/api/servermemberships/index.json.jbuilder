@servermemberships.each do |servermembership|
  json.set! servermembership.id do
    json.partial! 'servermembership', server_membership: servermembership
  end
end
