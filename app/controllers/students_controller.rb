class StudentsController < ApplicationController

    def index
        students = Student.all
        render json: students, include: :reviews
    end

    def show
        student = Student.find_by(id: params[:id])
        render json: student, include: :reviews
    end

end