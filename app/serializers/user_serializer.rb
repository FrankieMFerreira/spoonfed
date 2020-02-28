class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :zipcode, :date_of_birth, :gender, :bio, :user_profile_picture, :party_templates, :parties

  # if yes to chnaging event relationship to user in user model:
  def event_parties

  	event_part = object.events.map do |temp|
  		temp.party_template
  	end
  	event_part
  end


end
