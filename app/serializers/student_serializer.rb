class StudentSerializer < ActiveModel::Serializer
  attributes :id, :year, :house, :name, :spells, :image

  has_many :reviews
  has_many :signups
  has_many :extracurriculars
  has_many :teachers
end
