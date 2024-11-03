import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useForm } from "../../components/hooks/useForm";

export const UserEdit = () => {
  const { user, error } = useLoaderData();

  const { formState, onInputChange, onCheckboxChange } = useForm(user);

  const {
    username,
    password,
    enabled,
    accountNonExpired,
    accountNonLocked,
    credentialsNonExpired,
  } = formState;

  const handleForm = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="container align-content-center">
      <form onSubmit={handleForm} className="col-md-8">
        <h1>Formulario Edicion personaje</h1>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            placeholder="ingrese nombre del personaje"
            onChange={onInputChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            placeholder="ingrese peso del personaje"
            onChange={onInputChange}
          />
        </div>

        <div className="form-group">
          <label>edad</label>
          <input
            type="text"
            className="form-control"
            name="edad"
            //  value={values.edad}
            placeholder="ingrese edad del personaje"
            onChange={onInputChange}
          />
        </div>

        <div className="row">
          <legend className="mt-4">status</legend>
          <div className="form-group col-md-3 col-12">
            <label className="mt-4">User enabled</label>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                name="enabled"
                checked={enabled}
                onChange={onCheckboxChange}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {enabled ? "Enabled" : "Disabled"}
              </label>
            </div>
          </div>

          <div className="form-group col-md-3 col-12 ">
            <label className="mt-4">Expired account</label>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                name="accountNonExpired"
                checked={accountNonExpired}
                onChange={onCheckboxChange}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {accountNonExpired ? "Non expired" : "Expired"}
              </label>
            </div>
          </div>

          <div className="form-group col-md-3 col-12 ">
            <label className="mt-4">Locked account</label>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                name="accountNonLocked"
                checked={accountNonLocked}
                onChange={onCheckboxChange}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {accountNonLocked ? "Non locked" : "Locked"}
              </label>
            </div>
          </div>

          <div className="form-group col-md-3 col-12">
            <label className="mt-4">Credentials Expired</label>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                name="credentialsNonExpired"
                checked={credentialsNonExpired}
                onChange={onCheckboxChange}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {credentialsNonExpired ? "Non expired" : "Expired"}
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>imagen</label>
          <input
            type="text"
            className="form-control"
            name="imagen"
            //  value={values.imagen}
            placeholder="ingrese imagen del personaje"
            onChange={onInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Example select</label>
          <select
            multiple
            className="form-control"
            id="exampleFormControlSelect1"
            //   value={values.producciones.titulo}
            onChange={onInputChange}
          >
            {/*values.producciones.map((produccion) => (
                <option key={produccion.id}>{produccion.titulo}</option>
              ))*/}
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          // onClick={(e) => editarPersonaje(e)}
        >
          Editar
        </button>

        <div>
          <Link to="/users" className="card-link">
            Volver
          </Link>
        </div>
      </form>
    </div>
  );
};
