class Teacher < ApplicationRecord
    has_many :reviews
    has_many :students, through: :reviews

    def average_rating
        ratings = self.reviews.map {|review| review.rating}
        if ratings.sum > 0 
            avgRating = ratings.sum / ratings.size
        end
    end
end