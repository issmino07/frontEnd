import React, { useState, useEffect } from 'react';
import reservaService from '../../services/reservaService';
import classes from './Reservations.module.css';
import TagEstado from '../../components/tagestado/tagestado';

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const data = await reservaService.getAllReservas();
        setReservations(data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    }
    
    fetchReservations();
  }, []);

  const handleCardClick = (reservation) => {
    setSelectedReservation(reservation);
    setSelectedStatus(reservation.status); // Asignamos el estado de la reserva seleccionada
    setModalOpen(true);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    if (selectedReservation) {
      setSelectedReservation({ ...selectedReservation, status });
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={classes.container}>
      <h1>Reservaciones</h1>
      <div className={classes.cards}>
        {reservations.map((reservation) => (
          <div key={reservation.id} className={classes.card} onClick={() => handleCardClick(reservation)}>
            <h2>{reservation.nombre}</h2>
            <p>Fecha de Ingreso: {reservation.fechaingreso}</p>
            <p>Precio: {reservation.precio}</p>
            <p>Número de Personas: {reservation.numeropersonas}</p>
            <p>Descripción: {reservation.descripcion}</p>
            {/* Usamos el componente de etiqueta de estado */}
            {selectedReservation && selectedReservation.id === reservation.id && modalOpen && (
              <TagEstado estado={selectedStatus} />
            )}
          </div>
        ))}
      </div>
      {/* Modal para mostrar los detalles de la reserva y seleccionar el estado */}
      {selectedReservation && modalOpen && (
        <div className={classes.modalBackdrop} onClick={closeModal}>
          <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedReservation.nombre}</h2>
            <p>Fecha de Ingreso: {selectedReservation.fechaingreso}</p>
            <p>Precio: {selectedReservation.precio}</p>
            <p>Número de Personas: {selectedReservation.numeropersonas}</p>
            <p>Descripción: {selectedReservation.descripcion}</p>
            <div className={classes.buttonGroup}>
              <button onClick={() => handleStatusChange('pendiente')}>Pendiente</button>
              <button onClick={() => handleStatusChange('expirado')}>Expirado</button>
              <button onClick={() => handleStatusChange('resuelto')}>Resuelto</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}