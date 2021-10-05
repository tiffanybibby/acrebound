class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :nickname
      t.string :address
      t.integer :units
      t.string :img
      t.integer :sq_ft
      t.integer :price
      t.references :owner, null: false, foreign_key: true

      t.timestamps
    end
  end
end
