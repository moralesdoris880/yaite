class User < ApplicationRecord
    has_many :messages, dependent: :destroy
    has_many :chatrooms, through: :messages
end
