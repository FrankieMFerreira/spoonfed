# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170222140137) do

  create_table "events", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.date     "date"
    t.time     "start_time"
    t.time     "end_time"
    t.integer  "party_template_id"
    t.integer  "user_id"
    t.integer  "num_attendees"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["party_template_id"], name: "index_events_on_party_template_id"
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "item_categories", force: :cascade do |t|
    t.string   "name"
    t.integer  "party_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["party_id"], name: "index_item_categories_on_party_id"
  end

  create_table "items", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "item_category"
    t.decimal  "default_price"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "parties", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.date     "date"
    t.string   "location"
    t.integer  "user_id"
    t.integer  "num_attendees"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["user_id"], name: "index_parties_on_user_id"
  end

  create_table "party_items", force: :cascade do |t|
    t.integer  "item_id"
    t.integer  "party_template_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["item_id"], name: "index_party_items_on_item_id"
    t.index ["party_template_id"], name: "index_party_items_on_party_template_id"
  end

  create_table "party_photos", force: :cascade do |t|
    t.string   "url"
    t.integer  "party_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["party_id"], name: "index_party_photos_on_party_id"
  end

  create_table "party_templates", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "theme_category"
    t.integer  "min_age"
    t.integer  "max_age"
    t.string   "party_picture"
    t.integer  "user_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["user_id"], name: "index_party_templates_on_user_id"
  end

  create_table "providers", force: :cascade do |t|
    t.string   "name"
    t.string   "phone"
    t.string   "website"
    t.string   "address"
    t.text     "notes"
    t.integer  "item_category_id"
    t.boolean  "selected"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["item_category_id"], name: "index_providers_on_item_category_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.integer  "zipcode"
    t.datetime "date_of_birth"
    t.string   "gender"
    t.text     "bio"
    t.string   "user_profile_picture"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

end
