class ExtracurricularsController < ApplicationController
    def index
        extracurriculars = Extracurricular.all
        render json: extracurriculars, status: :ok
    end
end
