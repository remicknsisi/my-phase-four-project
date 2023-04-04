class Student < ApplicationRecord
    has_secure_password
    validates :username, :password, :password_confirmation, presence: true

    has_many :reviews
    has_many :extracurriculars
    has_many :teachers, through: :reviews
end
