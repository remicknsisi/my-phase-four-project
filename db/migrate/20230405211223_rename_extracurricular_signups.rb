class RenameExtracurricularSignups < ActiveRecord::Migration[6.1]
  def change
    rename_table :extracurricular_signups, :signups
  end
end
