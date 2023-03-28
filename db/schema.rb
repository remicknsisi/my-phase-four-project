ActiveRecord::Schema.define(version: 2023_03_28_215340) do

  enable_extension "plpgsql"

  create_table "extracurriculars", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "about"
    t.integer "number_of_members"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "teacher_id"
    t.integer "student_id"
    t.float "rating"
    t.string "comment"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "students", force: :cascade do |t|
    t.integer "year"
    t.string "house"
    t.string "name"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "spells"
  end

  create_table "teachers", force: :cascade do |t|
    t.string "classes"
    t.string "house"
    t.string "name"
    t.string "specialty"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
