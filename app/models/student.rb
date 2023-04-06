class Student < ApplicationRecord
    has_secure_password
    validates :name, presence: true
    validates :image, presence: true
    validates :username, presence: true
    validates :password, presence: true
    validates :password_confirmation, presence: true
    validate :house_exists
    validate :year_exists

    # custom validations
    def house_exists
        if house == "Choose a House"
            errors.add(:house, "cannot be blank")
        end
    end
    def year_exists
        if year == 'Choose a Year'
            errors.add(:year, "cannot be blank")
        end
    end

    has_many :reviews
    has_many :signups
    has_many :extracurriculars, through: :signups
    has_many :teachers, through: :reviews

      # add dependency here for reviews

end
