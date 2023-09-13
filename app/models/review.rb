class Review < ApplicationRecord
    validates :rating, presence: true, inclusion: { in: 1..5, message: "must be between 1-5" }
    validates :comment, presence: true

    belongs_to :student
    belongs_to :teacher

    def author
        author = self.student
    end

    def subject
        subject = self.teacher
    end
end
