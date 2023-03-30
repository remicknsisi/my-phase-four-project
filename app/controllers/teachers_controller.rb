class TeachersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        teachers = Teacher.all
        render json: teachers, include: :reviews
    end

    def show
        teacher = Teacher.find(params[:id])
        render json: teacher, include: :reviews
    end

    private

    def render_not_found_response(invalid)
        render json: { errors: "Cannot find teacher with this ID" }, status: :not_found
    end
end
