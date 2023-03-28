class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :teacher_id
      t.integer :student_id
      t.float :rating
      t.string :comment

      t.timestamps
    end
  end
end
