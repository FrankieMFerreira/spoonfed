class User < ApplicationRecord
	has_secure_password
	has_many :events
	has_many :party_templates
	has_many :parties




end
