class ReviewsController < ApplicationController
# probs not using on front end
    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find_by(id: params[:id])
        render json: review
    end
end
