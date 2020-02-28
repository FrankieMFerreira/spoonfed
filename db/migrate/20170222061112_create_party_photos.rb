class CreatePartyPhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :party_photos do |t|
      t.string :url
      t.belongs_to :party, foreign_key: true

      t.timestamps
    end
  end
end
