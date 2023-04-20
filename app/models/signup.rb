class Signup < ApplicationRecord
    belongs_to :student
    belongs_to :extracurricular

    validates :extracurricular_id, presence: true
    validate :signup_exists

    def signup_exists
        signups = Signup.all
        result = signups.find{|s| s.extracurricular_id == self.extracurricular_id && s.student_id == self.student_id}
        if result
            errors.add(:student, "is already signed up for this extracurricular")
        end
    end
end
