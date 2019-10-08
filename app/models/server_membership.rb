# == Schema Information
#
# Table name: server_memberships
#
#  id         :bigint           not null, primary key
#  server_id  :integer          not null
#  member_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ServerMembership < ApplicationRecord
  belongs_to :server,
  foreign_key: :server_id,
  class_name: :Server

  belongs_to :member,
  foreign_key: :member_id,
  class_name: :User

  def self.find_by_credentials(server_id, member_id)
    servermembership = ServerMembership.find_by(server_id: server_id, member_id: member_id)
    return nil unless servermembership
    servermembership
  end

end
