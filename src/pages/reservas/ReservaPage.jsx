import React, { useState } from 'react';
import classes from './Reservations.module.css';

const initialReservations = [
  { id: 1, name: 'Jinson Medina', date: '2024-06-10', time: '18:00', numberOfPeople: 4 },
  { id: 2, name: 'Johan Garcia', date: '2024-06-11', time: '19:00', numberOfPeople: 2 },
  { id: 3, name: 'Jimmy Lorente', date: '2024-06-12', time: '20:00', numberOfPeople: 6 },
];

export default function ReservationsPage() {
  const [reservations, setReservations] = useState(initialReservations);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    numberOfPeople: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReservation = {
      ...formData,
      id: reservations.length + 1,
      numberOfPeople: parseInt(formData.numberOfPeople, 10),
    };
    setReservations([...reservations, newReservation]);
    setFormData({ name: '', date: '', time: '', numberOfPeople: '' });
  };

  return (
    <div className={classes.container}>
      <h1>Reservaciones</h1>
      <div className={classes.cards}>
        {reservations.map((reservation) => (
          <div key={reservation.id} className={classes.card}>
            <h2>{reservation.name}</h2>
            <p>Fecha: {reservation.date}</p>
            <p>Hora: {reservation.time}</p>
            <p>Número de personas: {reservation.numberOfPeople}</p>
          </div>
        ))}
      </div>
      <h2>Agregar nueva reserva</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="time">Hora:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="numberOfPeople">Número de personas:</label>
          <input
            type="number"
            id="numberOfPeople"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Agregar reserva</button>
      </form>
    </div>
  );
}
