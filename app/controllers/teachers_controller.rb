class TeachersController < ApplicationController
    def index
        teachers = Teacher.all
        render json: teachers, status: :ok
    end

    def show
        teacher = Teacher.find_by(id: params[:id])
        if teacher
            render json: teacher, status: :ok
        else
            render json: { errors: "Teacher not found" }, status: :not_found
        end
    end

    # def teachers_specialty_with_word
    #     teachers = Teacher.all.filter{|teacher| teacher.specialty.downcase.include?(params[:word])}
    #     if teachers.length > 0
    #         reviews = teachers.map {|teacher| teacher.reviews}.flatten
    #             if reviews.length > 0
    #                 render json: reviews
    #             else
    #                 render json: {error: "Teacher name has no reviews yet."}
    #             end
    #     else
    #         render json: {error: "No teachers were found."}
    #     end
    # end

  #once i have teachers going to map thru them to grab all associated reviewsr

    #  Once you have found any teachers that have that word included in their specialty, find all the reviews for those teachers and render them back.  
  # If no teachers are found, render json that says so.  If no reviews are found for that teacher render a json message that says the teacher’s name but that they don’t have reviews yet.
end
