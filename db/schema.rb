# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_06_154921) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'owners', force: :cascade do |t|
    t.string 'first_name'
    t.string 'last_name'
    t.string 'email'
    t.string 'password_digest'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  create_table 'properties', force: :cascade do |t|
    t.string 'nickname'
    t.string 'address'
    t.integer 'units_num'
    t.string 'img'
    t.integer 'sq_ft'
    t.integer 'price'
    t.bigint 'owner_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['owner_id'], name: 'index_properties_on_owner_id'
  end

  create_table 'units', force: :cascade do |t|
    t.string 'unit_number'
    t.integer 'beds'
    t.integer 'baths'
    t.integer 'sq_ft'
    t.integer 'monthly_rent'
    t.boolean 'occupied'
    t.bigint 'owner_id', null: false
    t.bigint 'property_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['owner_id'], name: 'index_units_on_owner_id'
    t.index ['property_id'], name: 'index_units_on_property_id'
  end

  add_foreign_key 'properties', 'owners'
  add_foreign_key 'units', 'owners'
  add_foreign_key 'units', 'properties'
end
