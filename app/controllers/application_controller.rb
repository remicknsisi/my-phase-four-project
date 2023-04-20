class ApplicationController < ActionController::API
  include ActionController::Cookies
  # wrap_parameters format: [] - do i want to add this here? test to see if it breaks anything
  before_action :authorized, :current_user

  def authorized
    return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def current_user
    @student = Student.find_by(id: session[:user_id])
  end

end
