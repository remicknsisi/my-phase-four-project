class StudentSerializer < ActiveModel::Serializer
  attributes :id, :year, :house, :name, :spells, :image

  has_many :reviews
  # has_many :teachers -- need to show this relationship on front end and vice versa (eg somewhere on snapes page that shows all students who have reviewed him)
  has_many :extracurriculars, through: :signups
end
