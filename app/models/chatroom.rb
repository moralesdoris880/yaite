class Chatroom < ApplicationRecord
    has_many :messages, dependent: :destroy, inverse_of: :chatroom
    has_many :users, through: :messages
    #Inverse allows the chatroom to stay memorized when sending messages to it. So it doesnt send msgs to another chatroom.
    #Dependent destroy - deletes current record and its associations aka messages
end
