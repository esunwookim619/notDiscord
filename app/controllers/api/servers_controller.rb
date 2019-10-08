class Api::ServersController < ApplicationController

  def index
    @servers = Server.all
  end

  def create
   
    @server = Server.new(server_params)
    
    if @server.save
      @server.channels.push(Channel.create({channel_name: "general", server_id: @server.id}))
      # @server.invitation_url = SecureRandom::urlsafe_base64(4);
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

  def join 
    @server = Server.find_by_invitation(params[:invitation_url])
    if @server
      ServerMembership.create({server_id: @server.id, member_id: current_user.id})
      render "api/servers/show"
    else
      render json: ["Server does not exist"], status: 404
    end
  end

  def leave
     @server = Server.find(params[:server_id])
    if @server
      sm = ServerMembership.find_by_credentials(@server.id, current_user.id)
      ServerMembership.destroy(sm.id)
      render "api/servers/show"
    else
      render json: ["Server does not exist"], status: 404
    end
  end

  def server_params
    params.require(:server).permit(:server_name, :admin_id)
  end
  
end