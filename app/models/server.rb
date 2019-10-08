# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  admin_id    :integer          not null
#  server_name :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Server < ApplicationRecord 
  validates :admin_id, :server_name, presence: true
  after_initialize :ensure_invitation_url

  belongs_to :admin,
  foreign_key: :admin_id,
  class_name: :User

  has_many :channels, dependent: :destroy, 
  foreign_key: :server_id,
  class_name: :Channel

  has_many :memberships, dependent: :destroy,
  foreign_key: :server_id,
  class_name: :ServerMembership

  def self.find_by_invitation(invitation_url)
    server = Server.find_by(invitation_url: invitation_url)
    return nil unless server
    server
  end

  def self.find_by_id(id)
    server = Server.find_by(id)
    return nil unless server
    server
  end

  def self.generate_invitation_url
    SecureRandom::urlsafe_base64(4)
  end

  def ensure_invitation_url
    self.invitation_url ||= self.class.generate_invitation_url
  end

end
