class CreateDmchannels < ActiveRecord::Migration[5.2]
  def change
    create_table :dmchannels do |t|
      t.string :dmchannel_name
      t.integer :user1_id, null: false
      t.integer :user2_id, null: false

      t.timestamps
    end
    add_index :dmchannels, :user1_id
    add_index :dmchannels, :user2_id
  end
end
