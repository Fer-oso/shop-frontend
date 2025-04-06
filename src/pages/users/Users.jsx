import React from "react";

import { ErrorMessage } from "../../components/alerts/ErrorMessage";
import { Link, useLoaderData } from "react-router-dom";

import { startDeleteUser } from "../../store/users/userThunk";
import { EyeIcon, PencilIcon } from "@heroicons/react/24/outline";
import DeleteUserButton from "./components/buttons/DeleteUserButton";
import { useGetUsersData } from "./hooks/useGetUsersData";

export const Users = () => {
  const { data, error } = useLoaderData();

  const { useLoadUsers } = useGetUsersData();

  const { users } = useLoadUsers(data, error);

  const deleteUserById = (id) => () => {
    dispatch(startDeleteUser(id));
  };

  const titles = [
    { name: "ID" },
    { name: "Username" },
    { name: "Role" },
    { name: "User status" },
    { name: "Expired" },
    { name: "User locked" },
    { name: "Credentials status" },
    { name: "Actions" },
  ];

  const userStatusFields = [
    { key: "enabled", trueText: "Enabled", falseText: "Disabled" },
    { key: "accountNonExpired", trueText: "Not expired", falseText: "Expired" },
    { key: "accountNonLocked", trueText: "Not locked", falseText: "Locked" },
    {
      key: "credentialsNonExpired",
      trueText: "Not expired",
      falseText: "Expired",
    },
  ];

  const getStatusClass = (status) =>
    status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";

  return (
    <>
      {error ? (
        <ErrorMessage
          message={error.message}
          status={error.status}
          code={error.code}
          timestamp={error.timestamp}
        />
      ) : (
        <div className="container mx-auto bg-white py-24 sm:py-32">
          <div className="py-10">
            <div className=" mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-2 md:grid-cols-2  sm:grid-cols-2 sm:">
              <div className="max-w-xl">
                <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  Assert your leadership
                </h2>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Manage your users by modifying their personal information,
                  roles and more.
                </p>
              </div>

              <img
                src="https://blog.conzultek.com/hs-fs/hubfs/citrix-workspace-usuarios-finales-5.png?width=1693&name=citrix-workspace-usuarios-finales-5.png"
                className="img-fluid scale-110"
              />
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Users
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full mt-6 table-auto border-collapse border border-gray-200">
                <thead>
                  <tr>
                    {titles.map((title, key) => (
                      <th
                        key={key}
                        className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b"
                      >
                        {title.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user, key) => (
                    <tr className="hover:bg-slate-100" key={key}>
                      <td className="px-4 py-2 text-sm text-gray-500">
                        {user.id}
                      </td>
                      <td className="px-4 py-2 text-sm font-semibold text-gray-900">
                        {user.username}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-500">
                        {user.roles.map((role) => role.roleName).join(", ")}
                      </td>

                      {userStatusFields.map(({ key, trueText, falseText }) => (
                        <td
                          key={key}
                          className={`px-4 py-2 text-sm font-semibold ${getStatusClass(
                            user[key]
                          )}`}
                        >
                          {user[key] ? trueText : falseText}
                        </td>
                      ))}

                      <td className="px-4 py-2 text-sm">
                        <div className="flex space-x-2">
                          <Link to={`/users/${user.id}`} aria-label="View User">
                            <EyeIcon className="w-5 h-5 text-gray-700 hover:text-blue-500" />
                          </Link>
                          <Link
                            to={`/users/${user.id}/edit`}
                            aria-label="Edit User"
                          >
                            <PencilIcon className="w-5 h-5 text-gray-700 hover:text-green-500" />
                          </Link>
                          <DeleteUserButton
                            onDelete={deleteUserById(user.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
