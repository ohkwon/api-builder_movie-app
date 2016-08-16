class CreateMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string :name
      t.integer :length
      t.string :description
      t.string :year

      t.timestamps
    end
  end
end
