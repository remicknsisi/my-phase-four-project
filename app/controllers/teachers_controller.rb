class TeachersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        teachers = Teacher.all
        render json: teachers, status: :ok
    end

    def show
        # should this be find by - no, the rescue wont work unless it is the find method as find by returns nil whereas find calls upon the active record not found exception
        teacher = Teacher.find(params[:id])
        render json: teacher, status: :ok
    end

    private
    def render_not_found_response()
        render json: { errors: "Teacher not found" }, status: :not_found
    end
end
