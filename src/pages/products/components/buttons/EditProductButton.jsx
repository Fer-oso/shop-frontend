import Swal from "sweetalert2";

const EditProductButton = ({ editFunction, styles }) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const showEditalert = async () => {
    const result = await swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "Check all fields are correct",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, edit it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      editFunction();

      await swalWithBootstrapButtons.fire({
        title: "Edited!",
        text: "Your product has been edited succesfully.",
        icon: "success",
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      await swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your product has not edited",
        icon: "error",
      });
    }
  };

  return (
    <button onClick={showEditalert} className={styles}>
      Edit
    </button>
  );
};

export default EditProductButton;
