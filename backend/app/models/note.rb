class Note < ApplicationRecord
  belongs_to :user

  validates :title, :body, presence: true
end
