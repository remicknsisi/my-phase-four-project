class Extracurricular < ApplicationRecord
    has_many :signups
    has_many :students, through: :signups

    # validates :signups, uniqueness: true
    # validates :students, uniqueness: true
    # validates :signups, uniqueness: true


    # validates :students, uniqueness: {scope: :name}
end
