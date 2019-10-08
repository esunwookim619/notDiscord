class AddColumnServers < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :invitation_url, :string
  end
end
