class StudentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        students = Student.all
        render json: students, include: :reviews
    end

    def show
        student = Student.find(params[:id])
        render json: student, include: :reviews
    end

    private

    def render_not_found_response(invalid)
        render json: { errors: "Cannot find student with this ID" }, status: :not_found
    end
end