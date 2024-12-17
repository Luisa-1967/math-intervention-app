import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

export default function Home() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ana García", classroom: "3A", skills: [] },
    { id: 2, name: "Carlos López", classroom: "3A", skills: [] },
    { id: 3, name: "María Rodríguez", classroom: "3B", skills: [] }
  ]);

  const mathSkills = [
    "Suma",
    "Resta",
    "Multiplicación",
    "División",
    "Fracciones"
  ];

  const handleSkillClick = (studentId, skill) => {
    setStudents(students.map(student => {
      if (student.id === studentId) {
        const newSkills = student.skills.includes(skill)
          ? student.skills.filter(s => s !== skill)
          : [...student.skills, skill];
        return { ...student, skills: newSkills };
      }
      return student;
    }));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Intervención Matemática</h1>
      {students.map(student => (
        <div key={student.id} className="mb-4 p-4 border rounded-lg">
          <h2 className="font-bold text-lg">{student.name}</h2>
          <p className="text-gray-600 mb-2">Salón: {student.classroom}</p>
          <div className="flex flex-wrap gap-2">
            {mathSkills.map(skill => (
              <button
                key={skill}
                onClick={() => handleSkillClick(student.id, skill)}
                className={`px-3 py-1 rounded-full text-sm ${
                  student.skills.includes(skill)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
