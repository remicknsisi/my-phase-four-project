class Teacher < ApplicationRecord
    has_many :reviews
    has_many :students, through: :reviews
end
