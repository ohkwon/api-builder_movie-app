class Api::V1::MoviesController < ApplicationController

  def index

    @movies = Movie.all
    
  end

  def show
    
    @movie = Movie.find_by(id: params[:id])

  end

  def create

    @movie = Movie.new(
      name: params[:name],
      length: params[:length],
      description: params[:description],
      year: params[:year]
      )

    if @movie.save
      render json: @movie
    else
      render json: {errors: @movie.errors.full_messages}, status: 422
    end

  end

  def update

    @movie = Movie.find_by(id: params[:id])
    @movie.assign_attributes(
      name: params[:name],
      length: params[:length],
      description: params[:description],
      year: params[:year]
      )
    @movie.save
    render :show

  end

  def destroy

    @movie = Movie.find_by(id: params[:id])
    @movie.destroy
    render json: @movie

  end
  
end
