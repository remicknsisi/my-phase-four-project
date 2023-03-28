class StudentSerializer < ActiveModel::Serializer
  attributes :id, :year, :house, :name, :spells, :image
end
