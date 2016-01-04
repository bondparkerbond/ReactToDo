class ListsController < ApplicationController
  def index
    @items = Item.all.order(:created_at)
  end
end
