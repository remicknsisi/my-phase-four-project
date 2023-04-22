class RemoveSpellsFromStudents < ActiveRecord::Migration[6.1]
  def change
    remove_column :students, :spells
  end
end
