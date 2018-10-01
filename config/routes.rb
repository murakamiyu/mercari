Rails.application.routes.draw do
  root 'tests#index'
  get 'mypages/index', to: 'mypages#index'
end
