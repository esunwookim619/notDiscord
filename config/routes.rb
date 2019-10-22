Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :create, :destroy, :update, :join]
    resources :channels, only: [:index, :create, :destroy, :update]
    resources :server_memberships, only: [:index, :create, :destroy, :update]
    resources :messages, only: [:index, :create, :destroy]
    resources :dmchannels, only: [:index, :create, :destroy]
    resources :dms, only: [:index, :create, :destroy]
  end

  get 'api/servers/:invitation_url', to: 'api/servers#join'
  get 'api/servers/leave/:server_id', to: 'api/servers#leave'
  get 'api/makefriends/:friend_id', to: 'api/users#makefriend'
  get 'api/destroyfriends/:friend_id', to: 'api/users#destroyfriend'

  mount ActionCable.server, at: '/cable'
  
end
