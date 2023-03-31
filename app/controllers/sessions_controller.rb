class SessionsController < ApplicationController
    def create
        student = Student.find_by(username: params[:username])
        session[:user_id] = student.id
        render json: student
      end
end
