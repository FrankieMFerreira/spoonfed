class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title
      t.text :description
      t.date :date
      t.time :start_time
      t.time :end_time
      t.belongs_to :party_template, foreign_key: true
      t.belongs_to :user, foreign_key: true
      t.integer :num_attendees

      t.timestamps
    end
  end
end


