class Chatroom < ApplicationRecord
    has_many :messages, dependent: :destroy
    has_many :users, through: :messages
    has_one :image
    accepts_nested_attributes_for :image
    
    validates :name, presence: true, uniqueness: true
end

#Inverse allows the chatroom to stay memorized when sending messages to it. So it doesnt send msgs to another chatroom.
    #Dependent destroy - deletes current record and its associations aka messages
