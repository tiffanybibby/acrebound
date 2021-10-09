Rails
  .application
  .routes
  .draw do
    resources :owners, only: :create
    post '/auth/login', to: 'authentication#login'
    get '/auth/verify', to: 'authentication#verify'
    resources :properties do
      resources :units, except: :show
      # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    end
  end
