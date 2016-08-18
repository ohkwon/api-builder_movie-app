Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      get '/movies', to: 'movies#index'
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
  end

end
