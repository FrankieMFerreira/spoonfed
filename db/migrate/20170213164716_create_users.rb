class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :zipcode
      t.datetime :date_of_birth
      t.string :gender
      t.text :bio
      t.string :user_profile_picture

      t.timestamps
    end
  end
end
