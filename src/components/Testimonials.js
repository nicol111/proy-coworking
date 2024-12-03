import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Juan Pérez",
      image: "https://via.placeholder.com/100",
      text: "Un ambiente excelente para crear y colaborar. Me siento productivo cada día."
    },
    {
      name: "Laura Gómez",
      image: "https://via.placeholder.com/100",
      text: "Las instalaciones son de primera y el servicio al cliente es excepcional."
    },
    {
      name: "Carlos Rodríguez",
      image: "https://via.placeholder.com/100",
      text: "Un espacio que fomenta la creatividad y la innovación. ¡Totalmente recomendado!"
    },
    {
      name: "Ana Martínez",
      image: "https://via.placeholder.com/100",
      text: "Un lugar perfecto para trabajar en equipo y hacer networking con otros profesionales."
    }
  ];

  // Cambiar el testimonio cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 2) % testimonials.length); // Incrementar en 2 para mostrar dos por fila
    }, 4000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [testimonials.length]);

  // Muestra los dos testimonios actuales (para cada "slide")
  const displayTestimonials = [
    testimonials[currentTestimonial],
    testimonials[(currentTestimonial + 1) % testimonials.length],
  ];

  return (
    <div className="testimonials-carousel">
      <div className="row">
        {displayTestimonials.map((testimonial, index) => (
          <div key={index} className="col-lg-6 col-md-6 col-sm-12">
            <div className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dots-container">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentTestimonial ? 'active' : ''}`}
            onClick={() => setCurrentTestimonial(index)} // Cambiar el testimonio al hacer clic
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
