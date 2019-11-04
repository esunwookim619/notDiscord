# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  online          :boolean          default(FALSE)
#  avatar_color    :string
#

class User < ApplicationRecord
  
  validates :email, :session_token, :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  attr_reader :password

  #associations

  has_many :servers,
  foreign_key: :admin_id,
  class_name: :Server

  has_many :server_memberships, 
  foreign_key: :member_id,
  class_name: :ServerMembership

  has_many :messages, 
  foreign_key: :author_id,
  class_name: :Message

  has_many :dmchannels,
  foreign_key: :user1_id,
  class_name: :Dmchannel

  has_many :dmchannels,
  foreign_key: :user2_id,
  class_name: :Dmchannel

  has_many :friends, dependent: :destroy,
  foreign_key: :self_id,
  class_name: :Friendship

  has_many :sent_dms, 
  foreign_key: :author_id,
  class_name: :Dm

  has_many :received_dms,
  foreign_key: :receiver_id,
  class_name: :Dm

  def inserver
    self.update({online: true})
  end

  def leaveserver
    self.update({online: false})
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end
  
  def password=(password)
    @password = password  
    self.password_digest = BCrypt::Password.create(password)  
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)  
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!  
    self.session_token
  end

end
