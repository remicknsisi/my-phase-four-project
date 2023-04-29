class Student < ApplicationRecord
    has_secure_password
    validates :name, presence: true
    validates :image, presence: true
    validates :username, presence: true, uniqueness: true, on: :create
    validates :password, presence: true, on: :create
    validates :password_confirmation, presence: true, on: :create
    validate :house_exists
    validates :year, presence: true, inclusion: { in: 1..7, message: "must be a number between 1-7" }

    def house_exists
        if house == "Choose a House"
            errors.add(:house, "cannot be blank")
        end
    end

    has_many :reviews, dependent: :destroy
    has_many :signups, dependent: :destroy
    has_many :extracurriculars, through: :signups
    has_many :teachers, through: :reviews  
end
