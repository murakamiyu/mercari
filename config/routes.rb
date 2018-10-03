Rails.application.routes.draw do
  root 'tests#index'
  get 'mypages/index', to: 'mypages#index'
  get 'mypages/profile', to: 'mypages#profile'
  get 'mypages/deliver_adress', to: 'mypages#deliver_adress'
  get 'mypages/card', to: 'mypages#card'
  get 'mypages/card_new', to: 'mypages#creditnew'
  get 'mypages/card_after', to: 'mypages#creditafter'
  get 'mypages/email_password', to: 'mypages#email_password'
  get 'mypages/identification', to: 'mypages#identification'
  get 'mypages/sms_confirmation', to: 'mypages#sms_confirmation'
  get 'mypages/logout', to: 'mypages#logout'
end
