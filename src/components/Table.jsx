import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/students", {
          params: {
            currentPage,
            pageSize,
          },
        });

        setStudents(response.data.rows); // Asignamos los estudiantes obtenidos en `rows`
        setTotalStudents(response.data.count); // Guardamos el total de estudiantes
      } catch (error) {
        console.error("Error al obtener estudiantes:", error);
      }
    };

    fetchStudents();
  }, [currentPage, pageSize]);

  const totalPages = Math.ceil(totalStudents / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1); // Reinicia la página actual al cambiar el tamaño de página
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Legajo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.sid}</td>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>
                <button type="button" className="div_btn back">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-container m-auto">
        <label htmlFor="rowsPerPage">Total: {totalStudents} - Ítems por página:</label>
        <select id="rowsPerPage" onChange={handlePageSizeChange} value={pageSize}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

        <div id="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Anterior
          </button>
          <span> Página {currentPage} de {totalPages} </span>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
