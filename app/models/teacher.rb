class Teacher < ApplicationRecord
    has_many :reviews
    has_many :students, through: :reviews

    # add dependency here for reviews delete

    def average_rating
        ratings = self.reviews.map {|review| review.rating}
        avgRating = ratings.sum / ratings.size
    end
end