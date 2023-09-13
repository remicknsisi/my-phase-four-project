Rails.application.routes.draw do
  
  resources :extracurriculars, only: [:index]
  resources :reviews, only: [:create, :destroy]
  resources :teachers, only: [:index, :show]
  resources :students, only: [:index, :show, :create, :update, :destroy]
  resources :signups, only: [:destroy, :create]

  post "/students/:student_id/reviews", to: "reviews#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "students#show"
  post "/createaccount", to: "students#create"

  get '/reviews/:number', to: 'reviews#show'

  get '/teachers_specialty_with_word/:word', to: 'teachers#teachers_specialty_with_word'

  # Create a custom route that takes a parameter of a word. In a new action, look at  the word and find any teachers who have that word (non case sensitive) in their speciality description.  Once you have found any teachers that have that word included in their specialty, find all the reviews for those teachers and render them back.  
  # If no teachers are found, render json that says so.  If no reviews are found for that teacher render a json message that says the teacher’s name but that they don’t have reviews yet.

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

