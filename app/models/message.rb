class Message < ApplicationRecord
    validates :message_content, presence: true
end