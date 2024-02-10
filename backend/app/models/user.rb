class User < ApplicationRecord
  has_secure_password
  has_secure_token
  has_many :notes, dependent: :destroy

  # Validations
  validates :email, uniqueness: true, presence: true,
                    format: { with: URI::MailTo::EMAIL_REGEXP, message: 'Email is invalid.' }
  validates :password, presence: true, length: { minimum: 6 }, on: :create

  def invalidate_token
    update(token: nil)
  end
end
