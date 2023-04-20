class SignupsController < ApplicationController
    def destroy
        signup = Signup.find_by(id: params[:id])
        if @student && @student.id == signup.student_id
            signup.destroy
            render json: signup
        else
            render json: {error: "Couldn't find signup"}
        end
    end

    def create
        signup = @student.signups.create(signup_params)
        if signup.valid?
            render json: signup, status: :created
        else
            render json: { errors: signup.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def signup_params
        params.permit(:extracurricular_id)
    end
end