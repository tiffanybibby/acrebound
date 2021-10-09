Rails
  .application
  .routes
  .draw do
    resources :owners, only: :create
    post '/auth/login', to: 'authentication#login'
    get '/auth/verify', to: 'authentication#verify'
    resources :properties
    get '/units', to: 'units#index'
    post '/properties/:property_id/units', to: 'units#create' # usually a submitted form
    get '/properties/:property_id/units/:id', to: 'units#show'
    patch '/properties/:property_id/units/:id', to: 'units#update'
    put '/properties/:property_id/units/:id', to: 'units#update' # usually a submitted form
    delete '/properties/:property_id/units/:id', to: 'units#destroy'

    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  end
