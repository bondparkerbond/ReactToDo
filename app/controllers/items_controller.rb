class ItemsController < ApplicationController
  def index
    render json: Item.all.order(created_at: :asc)
  end

  def create
    item = Item.create(item_params)
    render json: item
  end

  def check_item
    checked = params[:item][:complete] == 'true' ? true : false
    item = Item.find(params[:id])
    item.update(complete: checked)
    render json: item
  end

  private

  def item_params
    params.require(:item).permit(:name, :completed)
  end

end
