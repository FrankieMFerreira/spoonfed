class Api::V1::EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date, :num_attendees, :party_template, :start_time, :end_time
  has_one :party_template
  has_one :user
end
