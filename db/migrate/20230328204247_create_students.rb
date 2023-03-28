class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.integer :year
      t.string :house
      t.string :name
      t.string :spells
      t.string :image

      t.timestamps
    end
  end
end
