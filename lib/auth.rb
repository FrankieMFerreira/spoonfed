class Auth

	ALGORITHM = 'HS256'

	def self.encrypt(hash)
		JWT.encode(hash, secret_key, ALGORITHM)
	end

	def self.decode(data)
		JWT.decode(data, secret_key, true, {algorithm: ALGORITHM})
	end

	def self.secret_key
		'3fe31ebb8b72f8250b9e8844c578e6537b14dbbc1753954dba1f75830ef42a816296ed54fa06dbca99abe04779bd612bb4790eed9476f8caa4ec1afe1cd7a075'
	end




end
