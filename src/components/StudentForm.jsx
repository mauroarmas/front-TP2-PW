import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const defaultValues = {
  inputNameValue: "",
  inputLastNameValue: "",
  inputSidValue: "",
  inputDniValue: "",
  inputEmailValue: "",
};

const StudentForm = ({ values = defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: values });

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3000/api/students", {
        firstname: data.inputNameValue,
        lastname: data.inputLastNameValue,
        dni: data.inputDniValue,
        email: data.inputEmailValue,
      });
      alert("Estudiante agregado exitosamente");
      reset(); 
    } catch (error) {
      if (error.response) {
        console.log("Error response data:", error.response.data); 
        alert("Hubo un error al agregar el estudiante: " + (error.response.data.message || "Error desconocido"));
      } else {
        alert("Hubo un error al agregar el estudiante");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="containerMain">
      <div className="w-100 d-flex justify-content-between my-3">
        <label className="w-50 text-start">Nombre:</label>
        <div className="w-50">
          <input
            className="w-100"
            {...register("inputNameValue", {
              required: "Nombre es requerido",
              maxLength: {
                value: 100,
                message: "Nombre no puede ser mayor a 100 caracteres",
              },
            })}
          />
          <p className="errorText">{errors.inputNameValue?.message}</p>
        </div>
      </div>

      <div className="w-100 d-flex justify-content-between my-3">
        <label className="w-50 text-start">Apellido:</label>
        <div className="w-50">
          <input
            className="w-100"
            {...register("inputLastNameValue", {
              required: "Apellido es requerido",
              maxLength: {
                value: 100,
                message: "Apellido no puede ser mayor a 100 caracteres",
              },
            })}
          />
          <p className="errorText">{errors.inputLastNameValue?.message}</p>
        </div>
      </div>

      <div className="w-100 d-flex justify-content-between my-3">
        <label className="w-50 text-start">DNI:</label>
        <div className="w-50">
          <input
            className="w-100"
            type="number"
            {...register("inputDniValue", {
              required: "DNI es requerido",
              minLength: {
                value: 7,
                message: "El DNI debe tener al menos 7 dígitos",
              },
              maxLength: {
                value: 8,
                message: "El DNI no puede tener más de 8 dígitos",
              },
            })}
          />
          <p className="errorText">{errors.inputDniValue?.message}</p>
        </div>
      </div>

      <div className="w-100 d-flex justify-content-between my-3">
        <label className="w-50 text-start">Email:</label>
        <div className="w-50">
          <input
            className="w-100"
            type="email"
            {...register("inputEmailValue", {
              required: "Email es requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingrese un email válido",
              },
            })}
          />
          <p className="errorText">{errors.inputEmailValue?.message}</p>
        </div>
      </div>

      <button className="div_btn my-3" type="submit">
        Agregar
      </button>
    </form>
  );
};

export default StudentForm;
