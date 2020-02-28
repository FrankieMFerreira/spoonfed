class Party < ApplicationRecord
  has_many :photos
  belongs_to :user
  has_many :item_categories, inverse_of: :party
  has_many :providers, through: :item_categories
  accepts_nested_attributes_for :item_categories

end
