json.extract! server, :id, :admin_id, :server_name, :invitation_url
json.memberships server.memberships.map { |m| m.member_id }
json.channels server.channels.map { |c| c.id } 