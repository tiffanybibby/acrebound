Rails
  .application
  .routes
  .draw do
    resources :owners, only: :create
    post '/auth/login', to: 'authentication#login'
    get '/auth/verify', to: 'authentication#verify'
    resources :properties 
      resources :units
      # , except: :index
      # put 'properties/units', to: 'properties#get_all_units'
      # resources :units, only: :index
      # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    end

