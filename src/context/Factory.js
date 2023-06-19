import React, { createContext, useContext, useState } from 'react';


export const StudentContext = createContext();

export const Student = () => useContext(StudentContext)

const StudentList = ({ children }) => {
    const [students, setStudent] = useState([
        { id: 1, name: "Firdavs", surname: "Nazarov" },
        { id: 2, name: "Abbos", surname: "Ibrohimov" },
        { id: 3, name: "Sardor", surname: "Tursunboyev" },
        { id: 4, name: "Anvar", surname: "Ibrohimov" },
        { id: 5, name: "Davron", surname: "Turdiyev" },
        { id: 6, name: "Shoxrux", surname: "Ergashev" },
        { id: 7, name: "Doston", surname: "Ergashev" },
    ])

    return (
        <StudentContext.Provider value={[students, setStudent]} >
            {children}
        </StudentContext.Provider>
    )

}


export default StudentList;