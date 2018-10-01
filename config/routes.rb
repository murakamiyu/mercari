Rails.application.routes.draw do
  root 'tests#index'
  resources :tests, only: [:index]
  resources :details, only: [:index]
  resources :mypages, only: [:index]
end
