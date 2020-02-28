class CreateItemCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :item_categories do |t|
      t.string :name
      t.belongs_to :party, foreign_key: true

      t.timestamps
    end
  end
end
