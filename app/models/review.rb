class Review < ApplicationRecord
    validates :rating, presence: true
    validates :comment, presence: true
    validates :teacher_id, presence: true
    validates :student_id, presence: true

    belongs_to :student
    belongs_to :teacher
end
