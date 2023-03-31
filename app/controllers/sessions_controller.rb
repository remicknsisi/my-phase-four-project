class SessionsController < ApplicationController
    #for logging in
    def create
        student = Student.find_by(username: params[:username])
        session[:user_id] = student.id
        render json: student
    end

    #for logging out
    def destroy
        session.delete :user_id
        head :no_content
    end
end
