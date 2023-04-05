class CreateExtracurricularSignups < ActiveRecord::Migration[6.1]
  def change
    create_table :extracurricular_signups do |t|
      t.integer :extracurricular_id
      t.integer :student_id

      t.timestamps
    end
  end
end
