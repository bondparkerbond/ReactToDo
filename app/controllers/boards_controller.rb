class BoardsController < ApplicationController
  def index
    @boards = Board.all.order(:created_at)
  end
end
