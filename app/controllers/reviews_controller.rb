class ReviewsController < ApplicationController
    skip_before_action :authorized, only: :show
    def create
        review = @student.reviews.create(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        review = Review.find_by(id: params[:id])
        if @student && @student.id == review.student_id
            review.destroy
            render json: review, status: :ok
        else
            render json: { error: "Only authors may delete their own reviews" }, status: :unauthorized
        end
    end

    def show
        # byebug
        reviews = Review.where('rating > ?', params[:number])
        if reviews.exists?
            teachers = reviews.map {|review| review.teacher}
            teachers.uniq
            render json: teachers, status: :ok
        else
            render json: { error: "No reviews found with ratings greater than value provided" }, status: :not_found
        end
    end

      # Create a custom route that takes in a param of a number. Use that number to grab all reviews with a rating greater than the number provided. Then, return the associated teachers. Dont return any duplicates. Then plus some error handling like if there are no reviews with a rating greater than the value provided

    private

    def review_params
        params.permit(:teacher_id, :rating, :comment)
    end
end