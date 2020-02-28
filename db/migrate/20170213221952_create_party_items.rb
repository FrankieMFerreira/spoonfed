class CreatePartyItems < ActiveRecord::Migration[5.0]
  def change
    create_table :party_items do |t|
      t.belongs_to :item, foreign_key: true
      t.belongs_to :party_template, foreign_key: true

      t.timestamps
    end
  end
end
