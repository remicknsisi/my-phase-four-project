class ReviewsController < ApplicationController
    def create
        student = Student.find_by(id: params[:student_id])
        review = student.reviews.create(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # mkae it so nothing is sent back and status is appropriate, add error handling
    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        render json: review
    end

    private

    def review_params
        params.permit(:student_id, :teacher_id, :rating, :comment)
    end
end
