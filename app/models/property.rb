class Property < ApplicationRecord
  belongs_to :owner
  has_many :units, dependent: :destroy
end
