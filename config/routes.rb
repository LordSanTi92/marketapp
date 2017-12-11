Rails.application.routes.draw do
  root 'advertisements#index'

  resources :advertisements

end
