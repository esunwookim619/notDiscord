class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def create
      @message = Message.new(message_params)
    
    if @message.save
      render "/api/messages/show"
    else
      render json: @message.errors.full_messages, status: 404
    end
  end

  def destroy
    @message = Message.find(params[:id])
    if @message.destroy
      render "api/messages/show"
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def message_params
     params.require(:message).permit(:body, :author_id, :channel_id)
  end

end