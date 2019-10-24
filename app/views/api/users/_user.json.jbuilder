json.extract! user, :id, :email, :username, :server_memberships, :online
json.friends user.friends.map { |f| f.friend_id }
json.received_dms user.received_dms.map { |r| r.id }