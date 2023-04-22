class ExtracurricularSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :about

  has_many :signups
  has_many :students
end
