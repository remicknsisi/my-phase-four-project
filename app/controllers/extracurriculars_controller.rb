class ExtracurricularsController < ApplicationController
    def index
        extracurriculars = Extracurricular.all
        render json: extracurriculars, include: :students
    end
end
