class Api::DmsController < ApplicationController
  def index
    @dms = Dm.all
  end

  def create
      @dm = Dm.new(dm_params)
    
    if @dm.save
      render "/api/dms/show"
    else
      render json: @dm.errors.full_messages, status: 404
    end
  end

  def destroy
    @dm = Dm.find(params[:id])
    if @dm.destroy
      render "api/dms/show"
    else
      render json: @dm.errors.full_messages, status: 422
    end
  end

  def dm_params
     params.require(:dm).permit(:body, :author_id, :receiver_id, :dmchannel_id)
  end

end