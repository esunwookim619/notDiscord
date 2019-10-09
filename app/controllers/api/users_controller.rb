class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    # @user.username = @user.email #default
    if @user.save
      login!(@user)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def user_params
    params.require(:user).permit(:email, :password, :username)
  end
  
end