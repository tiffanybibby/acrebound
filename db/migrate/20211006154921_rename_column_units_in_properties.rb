class RenameColumnUnitsInProperties < ActiveRecord::Migration[6.1]
  def change
    rename_column :properties, :units, :units_num
  end
end
