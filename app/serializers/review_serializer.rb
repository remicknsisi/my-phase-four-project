class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :teacher_id, :student_id, :rating, :comment
end
