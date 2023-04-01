class ReviewsController < ApplicationController
# probs not using on front end
    def index
        reviews = Review.all
        render json: reviews
    end
# probs not using on front end
    def show
        review = Review.find_by(id: params[:id])
        render json: review
    end

    # mkae it so nothing is sent back and status is appropriate, add error handling
    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        render json: review
    end
end
