# == Schema Information
#
# Table name: dmchannels
#
#  id             :bigint           not null, primary key
#  dmchannel_name :string
#  user1_id       :integer          not null
#  user2_id       :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Dmchannel < ApplicationRecord
  validates_uniqueness_of :user1_id, :scope => [:user2_id]

  belongs_to :user1,
  foreign_key: :user1_id,
  class_name: :User

  belongs_to :user2,
  foreign_key: :user2_id,
  class_name: :User

  has_many :dms, dependent: :destroy,
  foreign_key: :dmchannel_id,
  class_name: :Dm

end
