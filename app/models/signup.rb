class Signup < ApplicationRecord
    belongs_to :student
    belongs_to :extracurricular

    validates :extracurricular_id, presence: true
    validates :student_id, presence: true
end
