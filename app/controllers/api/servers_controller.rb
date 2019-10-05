class Api::ServersController < ApplicationController

  def index
    @servers = Server.all
  end

  def create
   
    @server = Server.new(server_params)
    
    if @server.save
      @server.channels.push(Channel.create({channel_name: "general", server_id: @server.id}))
      render "/api/servers/show"
    else
      render json: @server.errors.full_messages, status: 404
    end
  end

  def update
    @server = Server.find(params[:id])
    if @server.update(server_params)
      render "/api/servers/show"
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find(params[:id])
    if @server.destroy
      render "api/servers/show"
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def server_params
    params.require(:server).permit(:server_name, :admin_id)
  end
  
end