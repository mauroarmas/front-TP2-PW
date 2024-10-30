import React from "react";
import { Form, useForm } from "react-hook-form";

const defaultValues = {
  inputNameValue: "",
  inputLastNameValue: "",
};

const StudentForm = (id = null, values = defaultValues) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: values });

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="containerMain">
      <div className="w-100 d-flex justify-content-between my-3">
        <label>Nombre:</label>
        <input
          className="w-50"
          {...register("inputNameValue", {
            required: "Nombre es requerido",
            maxLength: {
              value: 5,
              message: "Nombre no puede ser mayor a 5 caracteres",
            },
          })}
        />
      </div>
      <p>{errors.inputNameValue?.message}</p>
      <div className="w-100 d-flex justify-content-between my-3">
        <label>Nombre:</label>
        <input
          className="w-50"
          {...register("inputNameValue", {
            required: "Nombre es requerido",
            maxLength: {
              value: 5,
              message: "Nombre no puede ser mayor a 5 caracteres",
            },
          })}
        />
      </div>
      <p>{errors.inputNameValue?.message}</p>
      <div className="w-100 d-flex justify-content-between my-3">
        <label>Nombre:</label>
        <input
          className="w-50"
          {...register("inputNameValue", {
            required: "Nombre es requerido",
            maxLength: {
              value: 5,
              message: "Nombre no puede ser mayor a 5 caracteres",
            },
          })}
        />
      </div>
      <p>{errors.inputNameValue?.message}</p>
      <div className="w-100 d-flex justify-content-between my-3">
        <label>Nombre:</label>
        <input
          className="w-50"
          {...register("inputNameValue", {
            required: "Nombre es requerido",
            maxLength: {
              value: 5,
              message: "Nombre no puede ser mayor a 5 caracteres",
            },
          })}
        />
      </div>
      <p>{errors.inputNameValue?.message}</p>

      <button className="div_btn my-3" type="submit">
        Agregar
      </button>
    </form>
  );
};

export default StudentForm;
