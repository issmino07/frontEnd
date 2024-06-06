const API_URL = 'http://localhost:8084/api/re';

const reservaService = {
    async createReserva(data) {
      
      const response = await fetch(`${API_URL}/reserva`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    },
  
    async getReservaById(id) {
      const response = await fetch(`${API_URL}/reserva/${id}`);
      return response.json();
    },
  
    async getAllReservas() {
      const response = await fetch(`${API_URL}/reserva`);
      return response.json();
    },
  
    async deleteReservaById(id) {
      await fetch(`${API_URL}/reserva/${id}`, {
        method: 'DELETE',
      });
    },
  
    async updateReserva(id, data) {
      const response = await fetch(`${API_URL}/reserva/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    },
  
    async partialUpdateReserva(id, data) {
      const response = await fetch(`${API_URL}/reserva/${id}`, {
        method: 'PATCH', // PUT para actualizaciones completas, PATCH para actualizaciones parciales
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    },
  };
  
  export default reservaService;