import React, { useState } from 'react'

const AppointementSchedular = () => {
   const [appointments, setAppointments] = useState([]);

   const addAppointement = (appointment) => {
    setAppointments([...appointments,appointment]);
   }

  return (
    <div>
      <h3>Appointment Schedular</h3>
      <button onClick={() => addAppointement({ id: Date.now(), time: '10:00 AM'})}>
        Schedule New Appointment
      </button>
      <ul>
        {appointments.map(app => (
            <li key={app.id}>{app.time}</li>
        ))}
      </ul>
    </div>
  )
}

export default AppointementSchedular
