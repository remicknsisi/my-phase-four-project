class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :classes, :house, :name, :specialty, :image

  has_many :reviews
  has_many :students, through: :reviews
end
