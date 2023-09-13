class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create
    #login
    def create
        student = Student.find_by(username: params[:username])
        if student&.authenticate(params[:password])
            session[:user_id] = student.id
            render json: student, status: :created
        else
            render json: { error: { login: "Invalid username or password" }}, status: :unauthorized
        end
    end

    #logout
    def destroy
        session.delete :user_id
        head :no_content
    end
end
