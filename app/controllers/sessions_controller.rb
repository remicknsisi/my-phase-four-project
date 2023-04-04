class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create
    #for logging in
    def create
        student = Student.find_by(username: params[:username])
        if student&.authenticate(params[:password])
            session[:user_id] = student.id
            render json: student
        else
            render json: { error: { login: "Invalid username or password" }}, status: :unauthorized
        end
    end

    #for logging out
    def destroy
        session.delete :user_id
        head :no_content

        # or session.clear
    end
end
