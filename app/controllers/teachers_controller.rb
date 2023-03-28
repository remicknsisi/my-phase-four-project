class TeachersController < ApplicationController

    def index
        teachers = Teacher.all
        render json: teachers, include: :reviews
    end

    def show
        teacher = Teacher.find_by(id: params[:id])
        render json: teacher, include: :reviews
    end
end
