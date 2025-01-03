import { UserMinusIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";

const DeleteUserButton = ({ onDelete }) => {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  const showDeleteAlert = () => {
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete();
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "The user selected has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your user is safe :)",
          icon: "error"
        });
      }
    });
  }

  return (
    <button onClick={()=>showDeleteAlert()} aria-label="Delete User">
      <UserMinusIcon className="w-5 h-5 text-gray-700 hover:text-red-500" />
    </button>
  );
}

export default DeleteUserButton;
