class Student < ApplicationRecord
    has_secure_password
    # validates :name, presence: true
    # validates :house, presence: true
    # validates :year, presence: true
    # validates :image, presence: true
    # validates :username, presence: true
    # validates :password, presence: true
    # validates :password_confirmation, presence: true

    has_many :reviews
    has_many :extracurriculars
    has_many :teachers, through: :reviews
end
