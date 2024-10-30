import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import Index from "../pages/Index";
import NewStudent from "../pages/NewStudent";
import StudentModule from "../pages/StudentModule";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<NavBar title="Pagina Principal"/>}>
        <Route index exact path="/" element={<Index ></Index>}></Route>
      </Route>
      <Route element={<NavBar title="Alumnos" addStudentBtn={true}/> }>
        <Route
          exact
          path="/students"
          element={<StudentModule></StudentModule>}
        ></Route>
      </Route>
      <Route element={<NavBar title="Agregar Estudiante" backBtn={true}/>}>
        <Route
          exact
          path="/students/add"
          element={<NewStudent></NewStudent>}
        ></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
