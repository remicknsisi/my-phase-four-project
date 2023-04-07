class Review < ApplicationRecord
    validates :rating, presence: true, inclusion: { in: 1..5, message: "must be between 1-5" }
    validates :comment, presence: true
    validates :teacher_id, presence: true
    validates :student_id, presence: true

    belongs_to :student
    belongs_to :teacher
end
