class Teacher < ApplicationRecord
    has_many :reviews
    has_many :students, through: :reviews

    def average_rating
        ratings = self.reviews.map {|review| review.rating}
        avgRating = ratings.sum / ratings.size
    end
end