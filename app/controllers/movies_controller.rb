class MoviesController < ApplicationController

  def index

    # @movies = Movie.all
    
  end

  # def show
    
  #   @movie = Movie.find_by(id: params[:id])

  # end

  # def create

  #   @movie = Movie.new(
  #     name: params[:name],
  #     length: params[:length],
  #     description: params[:description],
  #     year: params[:year]
  #     )

  #   @movie.save
  #   render :show

  # end

  # def update

  #   @movie = Movie.find_by(id: params[:id])
  #   @movie.assign_attributes(
  #     name: params[:name],
  #     length: params[:length],
  #     description: params[:description],
  #     year: params[:year]
  #     )
  #   @movie.save
  #   render :show

  # end

  # def destroy

  #   @movie = Movie.find_by(id: params[:id])
  #   @movie.destroy
  #   render :show

  # end

end
