user1 = User.create(name: 'Valerie McCarthy', email: 'valeriewilsonmccarthy@gmail.com', password: "1234", zipcode: 10007, date_of_birth: 'Wed Feb 21 1968 00:00:00 GMT-0400 (EDT)', gender: 'female', bio: 'Wife, sister, daughter, friend, Flatiron student', user_profile_picture: "https://res.cloudinary.com/projects/image/upload/v1487344688/vjfbhtkeqr8bp7b6u6tu.jpg")

user2 = User.create(name: 'Ashley Robinson', email: 'ashley.robinson@flatironschool.com', password: "1234", zipcode: 10030, date_of_birth: 'Fri Dec 22 1989 00:00:00 GMT-0400 (EDT)', gender: 'female', bio: 'Chronic face-rubber. Enthusiastic coffee drinker. Might need to work on bio-writing skills', user_profile_picture: "https://res.cloudinary.com/projects/image/upload/v1487362201/Ashley_mvhwgy.jpg")

user3 = User.create(name: 'Frankie Ferreira', email: 'frankie.ferreira@flatironschool.com', password: "1234", zipcode: 10030, date_of_birth: 'Tue Sep 12 1995 00:00:00 GMT-0400 (EDT)', gender: 'male', bio: 'Hipster coder', user_profile_picture: "https://res.cloudinary.com/projects/image/upload/v1487362289/frankie_x9kmv9.jpg")

	# t.string   "title"
 #    t.text     "description"
 #    t.datetime "event_date"
 #    t.integer  "party_template_id"
 #    t.integer  "user_id"
 #    t.integer  "num_attendees"


item1 = Item.create( name: 'Scrabble', description: 'the original Scrabble board game, 100 times and all', item_category: 'entertainment', default_price: 15)

item2 = Item.create(name: 'Dark and Stormy', description: 'Mount Gay Black Barrel Rum and Cock and Bull Ginger Beer', item_category: 'beverage', default_price: 8)

item3 = Item.create(name: 'Bollinger Champagne', description: 'Wonderful bubbly drink fitting the occasion', item_category: 'beverage', default_price: 62)

item4 = Item.create(name: 'Russian Caviar', description: 'Rich and large-sized eggs with a firm texture and golden color', item_category: 'food', default_price: 130)

item5 = Item.create(name: 'Longboard Beer', description: 'Smooth refreshing lager fermented and aged for weeks at cold temperatures to yield its exceptionally smooth flavor. A delicate, slightly spicy hop aroma complements the malty body of this beer.', item_category: 'beverage', default_price: 4)

item6 = Item.create(name: 'Whole Food Chips and Guacamole', description: 'The ultimate snack', item_category: 'food', default_price: 7)

party_template1 = PartyTemplate.create(title: 'Frankie Birthday Party', description: 'Champagne and good music from Spotify', theme_category: 'Birthday party', min_age: 21, max_age: 110, party_picture: 'https://res.cloudinary.com/projects/image/upload/v1487354289/porvt2ov4ftpkzlggj4t.jpg', user_id: 2)

party_template2 = PartyTemplate.create(title: 'Going Away Party', description: 'Saying goodbye in style and good company', theme_category: 'Cocktail Party', min_age: 21, max_age: 110, party_picture: 'https://res.cloudinary.com/projects/image/upload/v1487343851/fw5wzo0gi5khex8fawnr.jpg', user_id: 3)

party_template3 = PartyTemplate.create(title: 'Casual extended friends get together', description: 'When the group needs to kick back and chill', theme_category: 'Cocktail party', min_age: 21, max_age: 110, party_picture: 'https://res.cloudinary.com/projects/image/upload/v1487269053/sample.jpg', user_id: 1)

party_template4 = PartyTemplate.create(title: 'Casual Evening Over a Board Game', description: 'When you are yearning for a throw back to the days of Monopoly', theme_category: 'Dinner', min_age: 12, max_age: 110, party_picture: 'https://res.cloudinary.com/projects/image/upload/v1487360347/yorzlgu9vetud72itk4q.jpg', user_id: 2)

party_template5 = PartyTemplate.create(title: 'Valerie Grad Party', description: 'Dark and stormies and great music', theme_category: 'Celebration', min_age: 14, max_age: 85, party_picture: 'https://res.cloudinary.com/projects/image/upload/v1487354223/e6rgu3iiqapim4gws655.jpg', user_id: 1)

party_template6 = PartyTemplate.create(title: 'Protest Trump Fundraiser', description: 'Community gathering to help us activate', theme_category: 'Organizer', min_age: 21, max_age: 110, party_picture: 'https://res.cloudinary.com/projects/image/upload/v1487354418/aqrsv1dasrq9rboxqfdt.jpg', user_id: 3)

party_item1 = PartyItem.create(item_id: 1, party_template_id: 1 )


party_item2 = PartyItem.create(item_id: 2, party_template_id: 2 )

party_item3 = PartyItem.create(item_id: 3, party_template_id: 2 )

party_item4 = PartyItem.create(item_id: 4, party_template_id: 2 )

party_item5 = PartyItem.create(item_id: 5, party_template_id: 3 )

party_item6 = PartyItem.create(item_id: 6, party_template_id: 3 )

party_item7 = PartyItem.create(item_id: 2, party_template_id: 3 )

# event1 = Event.create(title: 'Scrabble Night at the McCarthy House', description: 'Casual night of home cooked food and intellectual puzzles', event_date: 3/10/2017, party_template_id: 1, user_id: 1, num_attendees: 8)

# event2 = Event.create(title: 'Oscar Night Splash', description: 'Black tie anId red carpet dresses with highball cocktails and 75 inch screen TV', event_date: 2/26/2017, party_template_id: 2, user_id: 3, num_attendees: 18)

# event3 = Event.create(title: 'Chill Night Celebrating Flatiron Graduation Hosted by Ash', description: 'BYO good cheer', event_date: 2/24/2017, party_template_id: 3, user_id: 2, num_attendees: 35)
