import React, { useState } from 'react';

export default function Home() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ana García", classroom: "3A", skills: [], notes: "" },
    { id: 2, name: "Carlos López", classroom: "3A", skills: [], notes: "" },
    { id: 3, name: "María Rodríguez", classroom: "3B", skills: [], notes: "" },
  ]);

  const mathSkills = [
    "Suma",
    "Resta",
    "Multiplicación",
    "División",
    "Fracciones"
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Intervención Matemática</h1>
      <div className="space-y-4">
        {students.map(student => (
          <div key={student.id} className="border p-4 rounded">
            <h2 className="font-bold">{student.name}</h2>
            <p>Salón: {student.classroom}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
