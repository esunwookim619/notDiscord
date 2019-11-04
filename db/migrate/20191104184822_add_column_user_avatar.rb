class AddColumnUserAvatar < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :avatar_color, :string
  end
end
