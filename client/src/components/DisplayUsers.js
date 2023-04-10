import React from "react";
import Student from './Student.js';
import Teacher from './Teacher.js';
import Filter from "./Filter.js";
import Sort from "./Sort.js";

function DisplayUsers ({ inStudents, students, teachers, selectedHouse, onNewSelection, onCheck, isChecked }) {

    return (
        <div>
            {inStudents ? 
            <>
                <Filter selectedHouse={selectedHouse} onNewSelection={onNewSelection} />
                <div className="users-container">
                    {students ? students.map(student => {
                        return (
                            <Student key={student.id} student={student}/>
                        )
                    }) : null}
                </div>
            </> :
            <>
                <Sort onCheck={onCheck} isChecked={isChecked}/>
                <div className="users-container">
                    {teachers ? teachers.map(teacher => {
                        return (
                            <Teacher key={teacher.id} teacher={teacher}/>
                        )
                    }) : null}
                </div>
            </>}
        </div>
    )
}

export default DisplayUsers;