class Extracurricular < ApplicationRecord
    has_many :signups
    has_many :students, through: :signups
end
