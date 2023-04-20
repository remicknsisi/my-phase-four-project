class Signup < ApplicationRecord
    belongs_to :student
    belongs_to :extracurricular

    validates :extracurricular_id, presence: true
    validates :student_id, presence: true

    # validates :student, uniqueness: {scope: :name}

    validate :signup_exists

    def signup_exists
        signups = Signup.all
        result = signups.include? self 
        # {|s| s.extracurricular_id == self.extracurricular_id and s.student_id == self.student_id}
        if result
            errors.add(:student, "is already signed up for this extracurricular")
        end
    end
end
