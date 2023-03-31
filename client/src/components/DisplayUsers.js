import React from "react";
import Student from './Student.js';
import Teacher from './Teacher.js';

function DisplayUsers ({ inStudents, students }) {

    return (
        <div>
            {inStudents ? 
            <>
                <div className="users-container">

                </div>
            </> 
            :
            <>
                <div className="users-container">
                    {students.map(student => {
                        return (
                            <Student key={student.id} student={student}/>
                        )
                    })}
                </div>
            </>
            }
            
        </div>
    )
}

export default DisplayUsers;