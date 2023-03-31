class Student < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :extracurriculars
    has_many :teachers, through: :reviews

    # validates :name, presence: true, uniqueness: true
end
