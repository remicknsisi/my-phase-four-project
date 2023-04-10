Rails.application.routes.draw do
  
  resources :extracurriculars, only: [:index]
  resources :reviews, only: [:create, :destroy]
  resources :teachers, only: [:index, :show]
  resources :students, only: [:index, :show, :create, :update]
  resources :signups, only: [:destroy, :create]

  post "/students/:student_id/reviews", to: "reviews#create"
  # does this need to be nested above?
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "students#show"
  post "/createaccount", to: "students#create"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

