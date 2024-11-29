import React, { useState } from "react";
import "./recover.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simular envío de correo de recuperación
    console.log("Recuperación solicitada para:", email);

    // Mostrar un mensaje de confirmación
    setMessage("Si este correo está registrado, recibirás un enlace para restablecer tu contraseña.");
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>Recuperar Contraseña</h2>
        {message && <p className="success-message">{message}</p>}
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="ejemplo@email.com"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
