
import React, { useState } from 'react';
import './Reserva.scss';

const Reserva = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    spaceType: 'privado',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva confirmada para ${formData.name} en el espacio ${formData.spaceType} el ${formData.date} a las ${formData.time}`);
  };

  return (
    <div className="reserva">
      <div className="container">
        <h2 className="section-title text-center">Reserva tu Espacio</h2>
        
        <div className="reservation-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Tu correo electrónico"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="spaceType">Tipo de Espacio</label>
              <select 
                id="spaceType" 
                name="spaceType" 
                value={formData.spaceType} 
                onChange={handleChange}
                required
              >
                <option value="privado">Espacio Privado</option>
                <option value="compartido">Espacio Compartido</option>
                <option value="reunion">Sala de Reunión</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date">Fecha de Reserva</label>
              <input 
                type="date" 
                id="date" 
                name="date" 
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Hora de Reserva</label>
              <input 
                type="time" 
                id="time" 
                name="time" 
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">Reservar Ahora</button>
          </form>
        </div>

        
        <div className="calendar-section">
          <h3 className="calendar-title">Ver Disponibilidad</h3>
          <div className="calendar">
            <input type="date" className="calendar-input" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserva;
