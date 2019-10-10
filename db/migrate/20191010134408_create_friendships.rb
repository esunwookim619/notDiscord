class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :self_id, null: false
      t.integer :friend_id, null: false

      t.timestamps
    end
    add_index :friendships, :self_id
    add_index :friendships, :friend_id
  end
end
