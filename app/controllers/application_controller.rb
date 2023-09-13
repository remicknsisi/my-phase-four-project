class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized, :current_user

  def authorized
    return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
    @student = Student.find_by(id: session[:user_id])
  end

  def current_user
    @student = Student.find_by(id: session[:user_id])
  end

end
