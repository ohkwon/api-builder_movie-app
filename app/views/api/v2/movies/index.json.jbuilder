json.array! @movies.each do |movie|

  json.partial! "movie.json.jbuilder", movie: movie

end