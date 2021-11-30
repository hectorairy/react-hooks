import React from "react";
import { useForm } from "../../hooks/useForm";

export const FormTODO = ({ handleAddTODO }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return false;
    const newTODO = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTODO(newTODO);
    reset();
  };
  return (
    <>
      <h3>Agregar TODO</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          autoComplete="off"
          name="description"
          placeholder="Aprender..."
          onChange={handleInputChange}
          value={description}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </>
  );
};
