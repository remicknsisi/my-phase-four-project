class Student < ApplicationRecord
    has_many :reviews
    has_many :extracurriculars
    has_many :teachers, through: :reviews
end
