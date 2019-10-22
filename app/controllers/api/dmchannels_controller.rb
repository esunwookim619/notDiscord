class Api::DmchannelsController < ApplicationController

  def index
    @dmchannels = Dmchannel.all
  end

  def create
    @dmchannel = Dmchannel.new(dmchannel_params)
    
    if @dmchannel.save
      render "/api/dmchannels/show"
    else
      render json: @dmchannel.errors.full_messages, status: 404
    end
  end

  def destroy
    @dmchannel = Dmchannel.find(params[:id])
    if @dmchannel.destroy
      render "api/dmchannels/show"
    else
      render json: @dmchannel.errors.full_messages, status: 422
    end
  end

  def dmchannel_params
    params.require(:dmchannel).permit(:dmchannel_name, :user1_id, :user2_id)
  end
  
end