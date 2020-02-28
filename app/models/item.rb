class Item < ApplicationRecord
	has_many :party_items
	has_many :party_templates, through: :party_items
end
