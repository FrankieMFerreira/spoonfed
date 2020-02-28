class Api::V1::UsersController < ApplicationController

	def index
		@users= User.all
		render json: @users
	end

	def create
		@user = User.new(user_params)
		if @user.save
			jwt = Auth.encrypt({user_id: @user.id})
			render json: {jwt: jwt, name: @user.name, id: @user.id}

		end

	end

	def show
		@user = User.find(params[:id])
		# data = Auth.decrypt (request.env['HTTP_AUTHORIZATION'])
		render json: @user


	end



	private

	def user_params
		params.permit(:name, :email, :password, :password_confirmation, :zipcode, :gender, :date_of_birth, :bio, :user_profile_picture, )
	end
end
