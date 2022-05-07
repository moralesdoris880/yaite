class CreateChatrooms < ActiveRecord::Migration[7.0]
  def change
    create_table :chatrooms do |t|
      t.integer :friendship_id
      t.integer :message_id
      t.timestamps
    end
  end
end
