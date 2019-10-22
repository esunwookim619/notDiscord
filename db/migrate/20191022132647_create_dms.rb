class CreateDms < ActiveRecord::Migration[5.2]
  def change
    create_table :dms do |t|
      t.string :body, null: false
      t.integer :dmchannel_id, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :dms, :dmchannel_id
    add_index :dms, :author_id
  end
end
