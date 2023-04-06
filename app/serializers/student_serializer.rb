class StudentSerializer < ActiveModel::Serializer
  attributes :id, :year, :house, :name, :spells, :image

  has_many :reviews
  has_many :extracurriculars, through: :signups
end
