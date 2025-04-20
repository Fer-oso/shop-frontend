import { Link, useLoaderData } from "react-router-dom";

import {
  Camera,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  XCircle,
} from "lucide-react";

import { ErrorMessage } from "../../../components/alerts/ErrorMessage";
import { useLoadUser } from "../../../providers/hooks/useLoadUser";
import { Loading } from "../../../components/loading/Loading";

export const UserInfo = () => {
  const { data, error } = useLoaderData();

  const { user, isLoading, message } = useLoadUser(data, error);

  if (isLoading) return <Loading />;

  return (
    <>
      {error?.status ? (
        <ErrorMessage
          message={message.message}
          code={message.code}
          status={message.status}
          timestamp={message.timestamp}
        />
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
          {/* Sección de Imagen y Nombre */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                alt="User Profile"
                className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg"
              />
              {/* Botón para cambiar foto */}
              <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full shadow-md hover:bg-indigo-700">
                <Camera className="w-5 h-5" />
              </button>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {user.username}
            </h2>
            <p className="text-gray-500 text-sm">Web Developer & Designer</p>
          </div>

          {/* Información del Usuario */}
          <div className="mt-6 space-y-4 text-gray-700">
            <p className="flex items-center gap-3 text-lg">
              <Mail className="w-6 h-6 text-indigo-500" />
              {user.email || "No email provided"}
            </p>
            <p className="flex items-center gap-3 text-lg">
              <Phone className="w-6 h-6 text-indigo-500" />
              {user.phone || "No phone provided"}
            </p>
            <p className="flex items-center gap-3 text-lg">
              <MapPin className="w-6 h-6 text-indigo-500" />
              {user.address || "No address provided"}
            </p>
            <p className="flex items-center gap-3 text-lg">
              {user.enabled ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <XCircle className="w-6 h-6 text-red-500" />
              )}
              {user.enabled ? "Active User" : "Inactive User"}
            </p>
          </div>

          {/* Botón Editar */}
          <div className="mt-6 flex justify-center gap-1">
            <Link
              to={`/users/${user.id}/edit/perfil`}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
            >
              Editar perfil
            </Link>
            <Link
              to={`/users/${user.id}/edit`}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
            >
              Editar usuario
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
/*                 <div className="col-md-6">
                        <p>
                          {user.roles.map((role) => " " + role.roleName + " ")}
                        </p>
                      </div> */
