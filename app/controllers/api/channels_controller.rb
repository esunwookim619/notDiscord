class Api::ChannelsController < ApplicationController

  def index
    @channels = Channel.all
  end

  def create
   
    @channel = Channel.new(channel_params)
    
    if @channel.save
      render "/api/channels/show"
    else
      render json: @channel.errors.full_messages, status: 404
    end
  end

  def update
    @channel = Channel.find(params[:id])
    if @channel.update(channel_params)
      render "/api/channels/show"
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    if @channel.destroy
      render "api/channels/show"
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def channel_params
    params.require(:channel).permit(:channel_name, :server_id)
  end
  
end