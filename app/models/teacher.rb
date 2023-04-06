class Teacher < ApplicationRecord
    has_many :reviews
    has_many :students, through: :reviews

          # add dependency here for reviews delete

end
