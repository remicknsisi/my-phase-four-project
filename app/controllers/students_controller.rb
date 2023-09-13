class StudentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    skip_before_action :authorized, only: :create
    skip_before_action :current_user, only: :create

    def index
        students = Student.all
        render json: students, status: :ok
    end

    #persists login
    def show
        if @student
            render json: @student, status: :ok
        else 
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    #signup
    def create
        student = Student.create!(student_params)
        session[:user_id] = student.id
        render json: student, status: :created
    end

    def update
        if @student
            @student.update!(student_params)
            render json: @student, status: :ok
        else
            render json: {error: "You must be logged in to update your profile!"}, status: :unprocessable_entity
        end
    end

    def destroy
        if @student
            @student.destroy
            head :no_content, status: :ok
        else
            render json: { error: "You may only delete your own account!" }, status: :unauthorized
        end
    end

    private

    def student_params
        params.permit(:username, :password, :password_confirmation, :name, :house, :year, :image)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end