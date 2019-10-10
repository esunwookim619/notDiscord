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

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:email, :password, :username, :online)
  end

  def user_params2
    params.require(:user).permit(:email, :username, :online)
  end
  
end