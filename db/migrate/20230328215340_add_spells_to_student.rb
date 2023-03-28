class AddSpellsToStudent < ActiveRecord::Migration[6.1]
  def change
    add_column :students, :spells, :string
  end
end
