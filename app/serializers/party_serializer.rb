class PartySerializer < ActiveModel::Serializer

  attributes :id, :title, :description, :date, :num_attendees, :location
  has_many :item_categories
  has_many :providers, through: :item_categories
  belongs_to :user

end
