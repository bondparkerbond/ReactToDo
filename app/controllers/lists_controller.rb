class ListsController < ApplicationController
  before_action :board
  
  def index
    board = Board.find(params[:id])
    @lists = board.lists
  end

  def create
    board = Board.find(params[:id])
    board.lists.create(list_params)
  end

  private

  def board
    @board = Board.find(params[:id])
  end

end
