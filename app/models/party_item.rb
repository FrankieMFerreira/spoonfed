class PartyItem < ApplicationRecord
  belongs_to :item
  belongs_to :party_template
end
