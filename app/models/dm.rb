# == Schema Information
#
# Table name: dms
#
#  id           :bigint           not null, primary key
#  body         :string           not null
#  dmchannel_id :integer          not null
#  author_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Dm < ApplicationRecord

  belongs_to :dmchannel,
  foreign_key: :dmchannel_id,
  class_name: :Dmchannel

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

end
