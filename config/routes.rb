Rails.application.routes.draw do
  
  # need to come back here and slim down on the routes I have that I wont use
  # get '/', to: 'students#index'
  # root 'students#index'
  resources :extracurriculars, only: [:index]
  resources :reviews, only: [:index, :show, :destroy]
  resources :teachers, only: [:index, :show]
  resources :students, only: [:index, :show]

  post "/students/:student_id/reviews", to: "reviews#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "students#show"
  post "/signup", to: "student#create"
  # root to: "main#index"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

