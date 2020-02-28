class Api::V1::PartyTemplateSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :theme_category, :min_age, :max_age, :party_picture
  has_one :user
  has_many :items
end
