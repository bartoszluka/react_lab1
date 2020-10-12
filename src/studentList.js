import React, { Component } from 'react'
import { createPortal } from 'react-dom';
import { data } from './App'
// const studentList = ['John', 'Mark', 'Stephanie', 'Martha', 'Vlad'];
// const numbers = [4, 1, 9, 49];

// function MyFilter(Name) {
//     return Name.startsWith('M');
// }

// function SquareRootNumbers(number) {
//     return Math.sqrt(number);
// }
// const filteredList = studentList.filter(MyFilter);
// const squeredNumbers = numbers.map(SquareRootNumbers);
let n=1;
// function AllStudents() {
//     return (
//         <div>
//             <ol>
//                 {data.map(teacher => (<li key={(n++).toString()}>{teacher.teacherName}</li>))}
//             </ol>
//         </div>
//     );
// }
function AllStudents() {
    return (
        <div>
            <ul>
                {data.map(teacher => (
                <li>
                
                    <ul>
                        {teacher.students.map(student=>(
                            <li>
                                {student.name}
                            </li>
                        ))}
                    </ul>
                </li>))}
            </ul>
        </div>
    );
}



export default function StudentList() {
    return (
        <div>
            {/* <p>
                List of students
            </p>
            {filteredList.map(studentName =>
                <li>{studentName}</li>
            )}
            <p>

                {squeredNumbers.map(studentName =>
                    <li>{studentName}</li>
                )}

            </p> */}
            {/* {data.map(teacher => (<li>{teacher.teacherName}</li>))} */}
            
            <button onClick={AllStudents}>All students</button>
            <button>Sort students</button>
            <button>Old students</button>
            {AllStudents()}
        </div>
    );
}