class Movie < ApplicationRecord

  validates :name, presence: true
  validates :length, presence: true
  validates :description, presence: true
  validates :year, presence: true

end
