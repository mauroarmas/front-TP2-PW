import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SearchBar = () => {
  const { handleSubmit, register, reset } = useForm();

  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalStudents, setTotalStudents] = useState(0);

  const onSubmit = async (data) => {
    const search = data.inputLastNameValue;
    console.log(search);
    try {
      const response = await axios.get("http://localhost:3000/api/students", {
        params: {
          search,
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

  return (
    <nav class="navbar navbar-light">
      <form onSubmit={handleSubmit(onSubmit)} class="form-inline d-flex ">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Buscar por Apellido"
          aria-label="Search"
          {...register("inputLastNameValue", {
            required: "Busqueda es requerida",
          })}
        />
        <button class="div_btn ms-2" type="submit">
          Buscar
        </button>
      </form>
    </nav>
  );
};

export default SearchBar;
