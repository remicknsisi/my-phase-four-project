class StudentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        students = Student.all
        render json: students, include: :reviews
    end

    def show
        # student = Student.find(params[:id])
        # render json: student, include: :reviews
        student = Student.find_by(id: session[:user_id])
        if student
            render json: student, include: :reviews
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end

        # create a resuce to check log in on all pages not just student details
    end

    private

    def render_not_found_response(invalid)
        render json: { errors: "Cannot find student with this ID" }, status: :not_found
    end

    def student_params
        params.permit(:username, :password)
    end
end