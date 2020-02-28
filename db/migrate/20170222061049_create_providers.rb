class CreateProviders < ActiveRecord::Migration[5.0]
  def change
    create_table :providers do |t|
      t.string :name
      t.string :phone
      t.string :website
      t.string :address
      t.text :notes
      t.belongs_to :item_category, foreign_key: true
      t.boolean :selected

      t.timestamps
    end
  end
end
