Rails.application.routes.draw do
  
  # need to come back here and slim down on the routes I have that I wont use
  # get '/', to: 'students#index'
  # root 'students#index'
  resources :extracurriculars
  resources :reviews, only: [:index, :show, :destroy]
  resources :teachers, only: [:index, :show]
  resources :students, only: [:index, :show]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "student#show"
  # root to: "main#index"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

