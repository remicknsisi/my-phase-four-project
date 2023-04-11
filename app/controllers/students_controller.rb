class StudentsController < ApplicationController
    wrap_parameters :student, include: [:password, :password_confirmation]
    # do i need this line above
    skip_before_action :authorized, only: :create
    skip_before_action :current_user, only: :create

    def index
        students = Student.all
        render json: students
    end

    #persists login
    def show
        if @student
            render json: @student
        else 
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    #signup
    def create
        student = Student.create(student_params)
        if student.valid?
            session[:user_id] = student.id
            render json: student, status: :created
        else
            render json: { errors: student.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        if @student
            @student.update(student_params)
            render json: @student
        else
            render json: { errors: student.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def student_params
        params.permit(:username, :password, :password_confirmation, :name, :house, :year, :image)
    end
end