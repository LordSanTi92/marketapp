class Advertisement < ActiveRecord::Base
  has_many :images, :dependent => :destroy
  before_save { self.email = email.downcase }
  validates :title, presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX }
  validates :content, presence: true, length: { minimum: 10 }
end
