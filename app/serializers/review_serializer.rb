class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :teacher_id, :student_id, :rating, :comment

  belongs_to :student
  belongs_to :teacher
end
