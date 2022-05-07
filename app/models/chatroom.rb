class Chatroom < ApplicationRecord
    has_one :friendship
    has_many :messages
end
