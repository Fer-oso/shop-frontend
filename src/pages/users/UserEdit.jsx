import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useForm } from "../../components/hooks/useForm";
import { useDispatch } from "react-redux";
import useFileInput from "../../components/hooks/useFileInput";
import { startEditUser, startLoadUser } from "../../store/users/userThunk";
import { RoleSelector } from "./components/RoleSelector";

export const UserEdit = () => {

  const { user } = useLoaderData();

  const dispatch = useDispatch();

  const { formState,setFormState, onInputChange, onCheckboxChange } = useForm(user);

  const {username,password,enabled,accountNonExpired,accountNonLocked,credentialsNonExpired,profileImages} = formState;

  const { files, error, handleFileChange, resetFiles } = useFileInput();

  useEffect(()=>{
   dispatch(startLoadUser(user)) 
  },[dispatch])


  const editUser = () => {
    dispatch(startEditUser(user.id, formState, files));
  };

    const availableRoles = [
      { roleName: "ADMIN" },
      { roleName: "USER" },
      { roleName: "INVITED" },
    ];

    const handleSubmit = (e) => {
      e.preventDefault();
    };
    
  return (
    <div className="container align-content-center">
      <form onSubmit={handleSubmit} className="col-md-8">
        <h1>Edit form user</h1>

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

        <div className="row">
          <legend className="mt-4">status</legend>
          <div className="form-group col-md-3 col-12">
            <label className="mt-4">User enabled</label>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchUserEnabledCheckDefault"
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
                id="flexSwitchExpiredAccountCheckDefault"
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
                id="flexSwitchLockedAccountCheckDefault"
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
                id="flexSwitchCredentialsExpiredCheckDefault"
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
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            name="file"
            lang="eng"
            value={profileImages}
            placeholder="Select a profile image"
            onChange={onInputChange}
          />
        </div>

        <RoleSelector
          roles={availableRoles}
          formState={formState}
          setFormState={setFormState}
        />

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => editUser(e)}
        >
          Edit
        </button>

        <div>
          <Link to="/users" className="card-link">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};
