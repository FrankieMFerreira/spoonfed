class Api::V1::PartyItemSerializer < ActiveModel::Serializer
  attributes :id
  has_one :item
  has_one :party_template
end
