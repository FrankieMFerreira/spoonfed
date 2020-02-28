class Api::V1::PartyTemplatesController < ApplicationController

	def index
		@party_templates= PartyTemplate.all
		render json: @party_templates
	end

	def show
		@party_template = PartyTemplate.find(params[:id])
		render json: @party_template
	end

	def update
		id = params["party_template"]["id"]
		@party_template = PartyTemplate.find(id)
		if @party_template.update(template_params)
			render json: @party_template
		end
	end

	def create
		id = Auth.decode(response.request.env["HTTP_AUTHORIZATION"])[0]['user_id']
		@party_template = PartyTemplate.new(template_params)
		if id
			@party_template.user_id = id
		end
		if params["parentID"]
	  	@parent_template = PartyTemplate.find(params["parentID"])
		end
		if @parent_template
			@party_template.items << @parent_template.items
		end
		if @party_template.save
			render json: @party_template
		end
	end

	def destroy
		@party_template = PartyTemplate.find(params[:id])
		@party_template.destroy
	end

	private

	def template_params
		params.permit(:title, :description, :theme_category, :min_age, :max_age, :party_picture, items_attributes:[ :name, :description, :item_category, :default_price])
	end
end
