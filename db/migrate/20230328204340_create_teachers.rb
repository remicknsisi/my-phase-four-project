class CreateTeachers < ActiveRecord::Migration[6.1]
  def change
    create_table :teachers do |t|
      t.string :classes
      t.string :house
      t.string :name
      t.string :specialty
      t.string :image

      t.timestamps
    end
  end
end
