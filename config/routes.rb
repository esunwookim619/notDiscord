Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :create, :destroy, :update, :join]
    resources :channels, only: [:index, :create, :destroy, :update]
    resources :server_memberships, only: [:index, :create, :destroy, :update]
  end

  get 'api/servers/:invitation_url', to: 'api/servers#join'
  get 'api/servers/leave/:server_id', to: 'api/servers#leave'

  Rails.application.routes.draw do
    root to: 'messages#root'
    mount ActionCable.server, at: '/cable'
  end
  
end
