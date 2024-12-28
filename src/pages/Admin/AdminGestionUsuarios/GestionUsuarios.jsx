import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaArrowLeft, FaArrowRight,FaUserPlus } from "react-icons/fa";
import "./GestionUsuarios.css";

const GestionUsuarios = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Simula la obtencion de datos del backend
  useEffect(() => {
    const fetchUsers = async () => {
      // Reemplazar con una llamada de la api
      const mockData = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Editor" },
        { id: 4, name: "Bob Brown", email: "bob@example.com", role: "User" },
        { id: 5, name: "Eve White", email: "eve@example.com", role: "Admin" },
        { id: 6, name: "Charlie Black", email: "charlie@example.com", role: "Editor" },
        { id: 7, name: "David Green", email: "david@example.com", role: "User" },
        { id: 8, name: "Fiona Blue", email: "fiona@example.com", role: "Admin" },
        { id: 9, name: "Grace Yellow", email: "grace@example.com", role: "User" },
        { id: 10, name: "Hank Pink", email: "hank@example.com", role: "Editor" },
        { id: 11, name: "Ivy Orange", email: "ivy@example.com", role: "User" },
      ];
      setUsers(mockData);
    };

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
                <button className="add-button"> <FaUserPlus /> </button>
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
                    <button className="edit-button">
                      <FaEdit />
                    </button>
                    <button className="delete-button">
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
    </div>
  );
};

export default GestionUsuarios;
