import React from "react";
import Student from './Student.js';
import Teacher from './Teacher.js';

function DisplayUsers ({ inStudents, students, teachers }) {
    console.log(students, teachers)

    return (
        <div>
            {inStudents ? 
            <>
                <div className="users-container">
                    {students ? students.map(student => {
                        return (
                            <Student key={student.id} student={student}/>
                        )
                    }) : null}
                </div>
            </> :
            <>
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


// {inStudents ? 
//     <>
//         <div className="users-container">
//             {students.map(student => {
//                 return (
//                     <Student key={student.id} student={student}/>
//                 )
//             })}
//         </div>
//     </> :
//     <>
//         <div className="users-container">
//             {teachers.map(teacher => {
//                 return (
//                     <Teacher key={teacher.id} teacher={teacher}/>
//                 )
//             })}
//         </div>
//     </>}