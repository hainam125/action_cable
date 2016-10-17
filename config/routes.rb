Rails.application.routes.draw do
  resources :chatrooms
  devise_for :users
  resources :messages
  root to: "chatrooms#index"
  mount ActionCable.server => '/cable'
end
