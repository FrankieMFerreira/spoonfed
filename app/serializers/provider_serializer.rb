class ProviderSerializer < ActiveModel::Serializer
  attributes :name, :phone, :website, :address, :notes, :selected, :item_category, :event
end
