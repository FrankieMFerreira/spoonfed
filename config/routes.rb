Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      resources :party_items
      delete 'party_items/:item_id/:party_template_id', to: 'party_items#destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      resources :items, :parties, :item_categories
    end
  end
  namespace :api do
    namespace :v1 do
      resources :party_templates
    end
  end
  namespace :api do
    namespace :v1 do
      resources :events
    end
  end


  namespace :api do
  	namespace :v1 do
  		resources :users
  		post 'signup', to: 'users#create'
      post 'login', to: 'sessions#create'
  	end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
