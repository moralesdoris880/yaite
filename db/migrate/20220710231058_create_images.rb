class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.integer :chatroom_id
      t.string :url
      t.string :alt
      t.timestamps
    end
  end
end
