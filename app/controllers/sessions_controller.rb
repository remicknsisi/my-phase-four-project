class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create
    #login
    def create
        student = Student.find_by(username: params[:username])
        # authenticate is a special method given to us by bcrypt to check the stored password and provided pw
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
