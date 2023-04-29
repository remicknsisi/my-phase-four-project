class ReviewsController < ApplicationController
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

    private

    def review_params
        params.permit(:teacher_id, :rating, :comment)
    end
end
