class StudentsController < ApplicationController

    def index
        students = Student.all
        render json: students, include: :reviews
    end

    def show
        student = Student.find_by(id: params[:id])
        if student
            render json: student.to_json(include: [:reviews]), status: :ok
        else
            render json: { message: 'No student found with that id' }, status: :not_found
        end
    end

end