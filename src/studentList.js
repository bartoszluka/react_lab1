import React, { Component } from 'react'
import { createPortal } from 'react-dom';
import { data } from './App'

function AllStudents() {
    return (
        <div>
            {
                data.map((teacher, key) => (
                    <div key={key}>
                        {teacher.students.map((student, key) => (
                            <li key={key}>
                                <span>{student.name} </span>
                            </li>
                        ))}
                    </div>
                ))
            }
        </div>
    );
}

export default function StudentList() {
    return (
        <div>
            <button onClick={AllStudents}>All students</button>
            <button>Sort students</button>
            <button>Old students</button>
            {AllStudents()}
        </div>
    );
}