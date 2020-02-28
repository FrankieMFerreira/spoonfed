class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.string :item_category
      t.decimal :default_price

      t.timestamps
    end
  end
end
