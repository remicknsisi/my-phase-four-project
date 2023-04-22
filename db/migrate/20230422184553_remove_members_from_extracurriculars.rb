class RemoveMembersFromExtracurriculars < ActiveRecord::Migration[6.1]
  def change
    remove_column :extracurriculars, :number_of_members
  end
end
