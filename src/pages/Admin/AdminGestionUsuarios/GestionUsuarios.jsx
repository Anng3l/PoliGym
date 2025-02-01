import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaArrowLeft, FaArrowRight,FaUserPlus } from "react-icons/fa";
import "./GestionUsuarios.css";
import { DiVim } from "react-icons/di";
import { BiColor } from "react-icons/bi";
import axios from "axios";

const GestionUsuarios = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  {/* Modal Add */}
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  {/* Modal Edit */}
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const openModalEdit = () => setIsModalOpenEdit(true);
  const closeModalEdit = () => setIsModalOpenEdit(false);

  {/* Modal Delete */}
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);

  const openModalDelete = () => setIsModalOpenDelete(true);
  const closeModalDelete = () => setIsModalOpenDelete(false);

    {/* Modal Delete ananidado */}
    const [isModalOpenNest, setIsModalOpenNest] = useState(false);

    const openModalNest = () => setIsModalOpenNest(true);
    const closeModalNest = () => setIsModalOpenNest(false);

  // Simula la obtencion de datos del backend
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token"); // Obtener el token
      const response = await axios.get("http://localhost:7001/api/users", {
        headers: {
          Authorization: `Bearer ${token}`, // Enviar token en el encabezado si es necesario
        },
      });
  
      setUsers(response.data); // Asumiendo que la API devuelve una lista de usuarios
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);
  // logica de paginacion
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = users.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(users.length / rowsPerPage);

  return (
    
    <div className="user-management-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div>
          <h1>Gestión de Usuarios</h1>
        </div>
        <button className="logout-button">Cerrar Sesión</button>
      </div>
    
      {/* Main Content */}
      <div className="main-content">
        <h3>Administrador:</h3>
      
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre y Apellido</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Input Row */}
              <tr>
                <td></td>
                <td>
                  
                </td>
                <td>
                <button className="add-button"  onClick={openModal}> <FaUserPlus /> </button>
                </td>
                <td></td>
                <td>
                  
                </td>
              </tr>
              
            

              {/* Filas de usuario */}
              {currentRows.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="edit-button" onClick={openModalEdit}>
                      <FaEdit />
                    </button>
                    <button className="delete-button" onClick={openModalDelete}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Controles de paginacion */}
        <div className="pagination-controls">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
            disabled={currentPage === 1}
          >
            <FaArrowLeft/>
          </button>
          <span className="pagination-info"> {currentPage} de {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className={`pagination-button ${currentPage === totalPages ? "disabled" : ""}`}
            disabled={currentPage === totalPages}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      {/* Modal add user */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <h2>Nuevo Usuario</h2>
            <form className="user-form">
              <label>
                Nombre:
                <input type="text" placeholder="Nombre" required />
              </label>
              <label>
                Usuario:
                <input type="text" placeholder="Usuario" required />
              </label>
              <label>
                Email:
                <input type="email" placeholder="Email" required />
              </label>
              <div className="password-container">
                <label>
                  Contraseña:
                  <input type="password" placeholder="Contraseña" required />
                </label>
                <label>
                  Confirmar contraseña:
                  <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    required
                  />
                </label>
              </div>
              <fieldset>
                <legend>Rol:</legend>
                <label>
                  <input type="radio" name="role" value="Admin" required />
                  Admin
                </label>
                <label>
                  <input type="radio" name="role" value="Coach" required />
                  Coach
                </label>
                <label>
                  <input type="radio" name="role" value="Cliente" required />
                  Cliente
                </label>
              </fieldset>
              <label>
                Foto de perfil:
                <input type="file" accept="image/*" />
              </label>
              <button type="submit" className="submit-button">
                REGISTRAR
              </button>
            </form>
          </div>
        </div>
        )}
        {/* Modal Edit user */}
        {isModalOpenEdit && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-modal" onClick={closeModalEdit}>
                &times;
              </button>
              <h2>Editar Usuario</h2>
              <form className="user-form">
                <label>
                  Nombre:
                  <input type="text" placeholder="Nombre" required />
                </label>
                <label>
                  Usuario:
                  <input type="text" placeholder="Usuario" required />
                </label>
                <label>
                  Email:
                  <input type="email" placeholder="Email" required />
                </label>
                <div className="password-container">
                  <label>
                    Contraseña:
                    <input type="password" placeholder="Contraseña" required />
                  </label>
                  <label>
                    Confirmar contraseña:
                    <input
                      type="password"
                      placeholder="Confirmar contraseña"
                      required
                    />
                  </label>
                </div>
                
                <label>
                  Foto de perfil:
                  <input type="file" accept="image/*" />
                </label>
                <button type="submit" className="submit-button">
                  ACTUALIZAR
                </button>
              </form>
            </div>
          </div>

      )}

      {/* Modal Delete User */}
      {isModalOpenDelete && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-modal" onClick={closeModalDelete}>
                &times;
              </button>
              <h2>ESTAS SEGURO DE QUERER ELIMINAR ESTE REGISTRO?</h2>
              
                <div className="choice-content">
                <button className="submit-button" onClick={openModalNest}>
                  SI
                </button>

                <button className="submit-button" onClick={closeModalDelete}>
                  NO
                </button>
                </div>
                <h4 style={{ color: 'red', textAlign: 'center'}}>*NO PODRÁ REVERTIR ESTA ACCION*</h4>
                 
            </div>
          </div>

      )}

      {/* Modal Delete User Nest */}
      {isModalOpenNest && (
          <div className="modal-overlay">
            <div className="modal-content">
      <div className="header-with-icon">
        <h2>ELIMINADO</h2>
        <FaTrash className="icon-trash" />
      </div>
      <form className="user-form">
        <button
          className="submit-button"
          onClick={() => {
            closeModalDelete;
            closeModalNest
          }}
        >
          CONTINUAR
        </button>
      </form>
    </div>
          </div>

      )}
    </div>

      


  );
};

export default GestionUsuarios;
