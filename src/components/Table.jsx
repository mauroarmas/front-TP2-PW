import React from "react";

const Table = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Legajo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1234</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <div class="btn-group" role="group" aria-label="Basic example">

                <button type="button" class="div_btn back">
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">1234</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <div class="btn-group" role="group" aria-label="Basic example">

                <button type="button" class="div_btn back">
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">1234</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>
              <div class="btn-group" role="group" aria-label="Basic example">

                <button type="button" class="div_btn back">
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="pagination-container m-auto">
        <label for="rowsPerPage">Ítems por página:</label>
        <select id="rowsPerPage" onchange="updateTable()">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <div id="pagination"></div>
      </div>
    </div>
  );
};

export default Table;
