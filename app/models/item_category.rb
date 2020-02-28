class ItemCategory < ApplicationRecord
  belongs_to :party
  has_many :providers
end
