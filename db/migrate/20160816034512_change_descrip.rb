class ChangeDescrip < ActiveRecord::Migration[5.0]
  def change
    change_column :movies, :description, :text
  end
end
