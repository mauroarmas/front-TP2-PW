import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Table from "../components/Table";

const StudentModule = () => {
  const { handleSubmit, register } = useForm();
  const [search, setSearch] = useState("");

  const onSubmit = (data) => {
    setSearch(data.inputLastNameValue); // Establecemos el valor de búsqueda al useState de search, que será enviado a table
  };

  return (
    <div className="px-3">

        {/* Buscador */}
      <nav className="navbar navbar-light">
        <form onSubmit={handleSubmit(onSubmit)} className="form-inline d-flex">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Buscar por Apellido"
            aria-label="Search"
            {...register("inputLastNameValue", {})}
          />
          <button className="div_btn ms-2" type="submit">
            Buscar
          </button>
        </form>
      </nav>

        {/* Se renderiza la tabla con valores del Search (todos los datos o con datos del buscador) */}

      <Table search={search} />

    </div>
  );
};

export default StudentModule;
