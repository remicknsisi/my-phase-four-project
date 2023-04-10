class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :classes, :house, :name, :specialty, :image, :average_rating

  has_many :reviews
  has_many :students
end
