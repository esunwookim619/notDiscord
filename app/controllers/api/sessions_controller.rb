class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: ["Email is invalid", "Password is invalid"], status: 401
    else
      login!(@user)
      render 'api/users/show';
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ["User does not exist"], status: 404
    end
  end
  
end