Rails.application.routes.draw do
  #Sessions
  post "/login" => "sessions#create"
  get "/logout" => "sessions#destroy"

  # Notes
  resources :notes
end
