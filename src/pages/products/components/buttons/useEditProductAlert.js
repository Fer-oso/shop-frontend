import { useCallback } from "react";
import Swal from "sweetalert2";

export const useEditProductAlert = () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const showEditAlert = useCallback(
    async (editFunction) => {
      const result = await swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "Check all fields are correct",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, edit it!",
        cancelButtonText: "No, cancel!",
      });

      if (result.isConfirmed) {
        const { message } = await editFunction();
        try {
          console.log(message);

          if (message.code === 201) {
            await swalWithBootstrapButtons.fire({
              title: "Create!",
              text: "Your product has been edited succesfully.",
              icon: "success",
            });
          } else {
            await swalWithBootstrapButtons.fire({
              title: message.error.status,
              text: message.error.message,
              icon: "error",
            });
          }
        } catch (error) {
          // Manejo de errores en caso de fallo en createFunction
          console.error("Error editing product:", error);
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
          text: "Your product has not edited",
          icon: "error",
        });
      }
    },
    [swalWithBootstrapButtons],
  );

  return { showEditAlert };
};
