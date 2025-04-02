import Swal from "sweetalert2";

const RegisterUserButton = ({ registerFunction }) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const showCreateAlert = async () => {
    const result = await swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "Check all fields are correct",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, create it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      try {
        const { message } = await registerFunction();

        console.log(message);
        if (message.code === "201") {
          await swalWithBootstrapButtons.fire({
            title: "Create!",
            text: "Your user has been registered succesfully.",
            icon: "success",
          });
        } else {
          await swalWithBootstrapButtons.fire({
            title: "Error",
            text: "There was an issue registring your user.",
            icon: "error",
          });
        }
      } catch (error) {
        // Manejo de errores en caso de fallo en registerFunction
        console.error("Error registring user:", error);
        await swalWithBootstrapButtons.fire({
          title: "Error",
          text: "There was an unexpected issue. Please try again.",
          icon: "error",
        });
      }
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      await swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your user has not registered",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={showCreateAlert}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Register
      </button>
    </div>
  );
};

export default RegisterUserButton;
