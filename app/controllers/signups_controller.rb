class SignupsController < ApplicationController
    def destroy
        signup = Signup.find_by(id: params[:id])
        signup.destroy
        render json: signup
    end

    def create
        signup = Signup.create(signup_params)
        if signup.valid?
            render json: :signup, status: created
        else
            render json: { errors: signup.errors.full_messages }, status: :unprocessable_entity
        end
    end
# make it so that there is no response

    private
    def signup_params
        params.permit(:extracurricular_id, :student_id)
    end
end