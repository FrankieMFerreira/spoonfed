class Api::V1::PartyItemsController < ApplicationController

	def index
		@party_items= PartyItem.all
		render json: @party_items
	end

	def destroy
		@party_item = PartyItem.find_by(item_id: params["item_id"], party_template_id: params["party_template_id"])
		@party_item.destroy
		render json: 'success'
	end

end
