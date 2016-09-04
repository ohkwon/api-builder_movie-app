class Api::V3::MoviesController < ApplicationController

  def index

    @movies = Movie.all
    render json: @movies

  end

end