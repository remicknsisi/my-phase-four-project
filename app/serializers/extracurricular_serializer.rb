class ExtracurricularSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :about, :number_of_members

  has_many :signups
  has_many :students
end
