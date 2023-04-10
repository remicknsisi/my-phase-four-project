class ExtracurricularsController < ApplicationController
    def index
        extracurriculars = Extracurricular.all
        render json: extracurriculars
    end
end
