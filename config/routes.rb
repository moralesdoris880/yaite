Rails.application.routes.draw do
  resources :messages
  resources :chatrooms

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  get '/chatroom_messages', to: 'messages#chatroom_messages'
  get '/user_chatrooms', to: 'users#user_chatrooms'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
