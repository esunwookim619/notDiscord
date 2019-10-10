json.extract! user, :id, :email, :username, :server_memberships, :online
json.friends user.friends.map { |f| f.friend_id }