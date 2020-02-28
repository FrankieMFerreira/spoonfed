class Api::V1::ItemCategoriesController < ApplicationController

  def update
      @item = ItemCategory.find(params[:id])
      @item.update(item_params)
      render json: @item
    end


  private

  def item_params
    params.permit(:name)
  end

end