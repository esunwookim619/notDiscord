class Api::ServerMembershipsController < ApplicationController

  def index
    @servermemberships = ServerMembership.all
  end

  def destroy
    @server_membership = ServerMembership.find(params[:id])
    if @server_membership.destroy
      render "api/servers/show"
    else
      render json: @server_membership.errors.full_messages, status: 422
    end
  end

  def server_memberships_params
    params.require(:server_membership).permit(:server_id, :member_id)
  end
  
end