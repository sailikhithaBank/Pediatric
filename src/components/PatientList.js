import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PatientList = () => {
    const [patients, setPatients]  = useState([]);

    useEffect(() => {
         axios.get('/api/patients')
         .then(response => setPatients(response.data))
         .catch(error => console.error(error));
    }, [])
  return (
    <div>
      <h3>Patient List</h3>
      <ul>
        {patients.map(patient => (
            <li key={patient.id}>{patient.name} - {patient.age} years old</li>
        ))}
      </ul>
    </div>
  )
}

export default PatientList

