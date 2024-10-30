import React from "react";

const SearchBar = () => {
  return (
    <nav class="navbar navbar-light">
      <form class="form-inline d-flex ">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Buscar por Apellido"
          aria-label="Search"
        />
        <div class="div_btn ms-2" type="submit">
          Buscar
        </div>
      </form>
    </nav>
  );
};

export default SearchBar;
