Rails.application.routes.draw do

  get '/movies', to: 'movies#index'
  get '/movies2', to: 'movies#index2'
  
  namespace :api do
    namespace :v1 do
      get '/movies', to: 'movies#index'
      get '/', to: 'movies#index'
      get '/movies/index', to: 'movies#index'
      get '/movies/:id', to: 'movies#show'
      post '/movies', to: 'movies#create'
      patch '/movies/:id', to: 'movies#update'
      delete '/movies/:id', to: 'movies#destroy'
    end
    namespace :v2 do
      get '/movies', to: 'movies#index'
      get '/movies/index', to: 'movies#index'
      get '/movies/:id', to: 'movies#show'
      post '/movies', to: 'movies#create'
      patch '/movies/:id', to: 'movies#update'
      delete '/movies/:id', to: 'movies#destroy'
    end
    namespace :v3 do
      get '/movies', to: 'movies#index'
    end
  end

end
