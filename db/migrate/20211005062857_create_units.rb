class CreateUnits < ActiveRecord::Migration[6.1]
  def change
    create_table :units do |t|
      t.string :unit_number
      t.integer :beds
      t.integer :baths
      t.integer :sq_ft
      t.integer :monthly_rent
      t.boolean :occupied
      t.references :owner, null: false, foreign_key: true
      t.references :property, null: false, foreign_key: true

      t.timestamps
    end
  end
end
