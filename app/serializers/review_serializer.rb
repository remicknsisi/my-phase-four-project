class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :teacher_id, :student_id, :rating, :comment, :author, :subject

  belongs_to :student
  belongs_to :teacher
end
