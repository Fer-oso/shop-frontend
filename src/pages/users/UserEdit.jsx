import React from "react";

import { UserForm } from "../../components/forms/form/UserForm";
import { useEditUserAlert } from "./utils/useEditUserAlert";
import { useParams } from "react-router-dom";

import { useLoadUser } from "../../pages/users/hooks/useGetUsersData";
import { Loading } from "../../components/loading/Loading";
import { ErrorMessage } from "../../components/alerts/ErrorMessage";
import { useEditUser } from "../../pages/users/hooks/useGetUsersData";

export const UserEdit = () => {
  const { id } = useParams();

  const { user, message } = useLoadUser(id);

  const { showEditUserAlert } = useEditUserAlert();

  const { editUser } = useEditUser();

  const editUserFunction = async (user, files) => {
    const { message } = await editUser(id, user, files);

    return { message };
  };

  if (user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8">
        <UserForm
          mode={"Editar"}
          formInitialstate={user}
          userActionfunction={(user, files) =>
            showEditUserAlert(() => editUserFunction(user, files))
          }
        />
      </div>
    );
  }

  return (
    <>
      {message?.error ? (
        <ErrorMessage
          message={message}
          status={message}
          code={message}
          timestamp={message}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};
