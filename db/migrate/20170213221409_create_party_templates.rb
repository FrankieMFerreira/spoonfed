class CreatePartyTemplates < ActiveRecord::Migration[5.0]
  def change
    create_table :party_templates do |t|
      t.string :title
      t.text :description
      t.string :theme_category
      t.integer :min_age
      t.integer :max_age
      t.string :party_picture
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
