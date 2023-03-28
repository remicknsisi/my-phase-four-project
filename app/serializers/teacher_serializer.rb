class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :classes, :house, :name, :specialty, :image
end
