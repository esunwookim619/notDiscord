class AddColumnToDms < ActiveRecord::Migration[5.2]
  def change
     add_column :dms, :receiver_id, :integer
  end
end
