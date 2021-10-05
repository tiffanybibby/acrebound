class Property < ApplicationRecord
  belongs_to :owner
  hash_many :units
end
