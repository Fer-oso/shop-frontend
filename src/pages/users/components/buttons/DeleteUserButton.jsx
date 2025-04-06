import { UserMinusIcon } from "@heroicons/react/24/outline";
import { useDeleteUserAlert } from "../../utils/useDeleteUser";

const DeleteUserButton = ({ onDelete }) => {
  const { showDeleteAlert } = useDeleteUserAlert();

  return (
    <button onClick={() => showDeleteAlert(onDelete)} aria-label="Delete User">
      <UserMinusIcon className="w-5 h-5 text-gray-700 hover:text-red-500" />
    </button>
  );
};

export default DeleteUserButton;
