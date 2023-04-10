class SignupSerializer < ActiveModel::Serializer
    attributes :id, :extracurricular_id, :student_id
  
    belongs_to :student
    belongs_to :extracurricular
  end
  