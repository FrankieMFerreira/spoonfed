class Provider < ApplicationRecord
  belongs_to :item_category
  belongs_to :party
end
