class Api::V1::SessionsController < ApplicationController


  def create
    @user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password])
      jwt = Auth.encrypt({user_id: @user.id})
			render json: {jwt: jwt, name: @user.name, id: @user.id}
    else
      render json: "its broken", status: 406
    end

  end

end
