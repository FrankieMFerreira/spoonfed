class CreateParties < ActiveRecord::Migration[5.0]
  def change
    create_table :parties do |t|
      t.string :title
      t.text :description
      t.date :date
      t.string :location
      t.belongs_to :user, foreign_key: true
      t.integer :num_attendees
      t.timestamps
    end
  end
end
