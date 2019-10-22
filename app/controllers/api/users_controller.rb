class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
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

  def makefriend
    @user = current_user
   
    @friend = User.find(params[:friend_id])
 
    if @friend
      Friendship.create(self_id: @user.id, friend_id: @friend.id)
      Friendship.create(self_id: @friend.id, friend_id: @user.id)
      render "api/users/show"
    else
      render json: ["User does not exist"], status: 404
    end
    
  end

  def destroyfriend
    @user = current_user
    @friend = User.find(params[:friend_id])
    @friendship = Friendship.find_by_credentials(@user.id, @friend.id)
    @friendship2 = Friendship.find_by_credentials(@friend.id, @user.id)
    if @friendship
      @friendship.destroy
      @friendship2.destroy
      render "api/users/show"
    else
      render json: ["Friendship does not exist"], status: 404
    end
  end

  def user_params
    params.require(:user).permit(:email, :password, :username, :online)
  end
  
end