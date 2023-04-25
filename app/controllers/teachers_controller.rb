class TeachersController < ApplicationController
    def index
        teachers = Teacher.all
        render json: teachers, status: :ok
    end

    def show
        teacher = Teacher.find_by(id: params[:id])
        if teacher
            render json: teacher, status: :ok
        else
            render json: { errors: "Teacher not found" }, status: :not_found
        end
    end
end
