class StudentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    wrap_parameters :student, include: [:password, :password_confirmation]
    skip_before_action :authorized, only: :create

    def index
        students = Student.all
        render json: students, include: :reviews
    end

    #persists login
    def show
        student = Student.find_by(id: session[:user_id])
        if student
            render json: student, include: :reviews
        else 
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    #signup
    def create
        student = Student.create(student_params)
        if student.valid?
            # moment the user is logged in
            session[:user_id] = student.id
            render json: student, status: :created
        else
            render json: { errors: student.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def render_not_found_response()
        render json: { errors: "Cannot find student with this ID" }, status: :not_found
    end

    def student_params
        params.permit(:username, :password, :password_confirmation, :name, :house, :year, :image)
    end
end