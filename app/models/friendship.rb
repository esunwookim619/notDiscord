# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  self_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ApplicationRecord

  validates_uniqueness_of :self_id, :scope => [:friend_id]

  belongs_to :self,
  foreign_key: :self_id,
  class_name: :User

  def self.find_by_credentials(self_id, friend_id)
    friendship = Friendship.find_by(self_id: self_id, friend_id: friend_id)
    return nil unless friendship
    friendship
  end

end
