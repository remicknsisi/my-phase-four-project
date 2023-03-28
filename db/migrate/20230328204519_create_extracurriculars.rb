class CreateExtracurriculars < ActiveRecord::Migration[6.1]
  def change
    create_table :extracurriculars do |t|
      t.string :name
      t.string :image
      t.string :about
      t.integer :number_of_members

      t.timestamps
    end
  end
end
