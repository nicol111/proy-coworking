import React, { useState } from 'react';
import './Profile.scss';

const Profile = ({ user, onLogout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    photo: user.photo || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log('Perfil actualizado:', formData);
    // Aquí puedes manejar la actualización del perfil en tu backend si es necesario.
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        {!isEditing ? (
          <>
            <img
              src={formData.photo || 'https://via.placeholder.com/150'}
              alt="Foto de perfil"
              className="profile-photo"
            />
            <h2>{formData.name}</h2>
            <p>{formData.email}</p>
            <div className="profile-actions">
              <button onClick={() => setIsEditing(true)} className="btn-edit">
                Editar Perfil
              </button>
              <button onClick={onLogout} className="btn-logout">
                Cerrar Sesión
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="input-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="photo">Foto de Perfil (URL)</label>
              <input
                type="text"
                id="photo"
                name="photo"
                value={formData.photo}
                onChange={handleInputChange}
                placeholder="Ingresa la URL de tu foto"
              />
            </div>
            <button type="submit" className="btn-save">
              Guardar Cambios
            </button>
            <button onClick={() => setIsEditing(false)} className="btn-cancel">
              Cancelar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
