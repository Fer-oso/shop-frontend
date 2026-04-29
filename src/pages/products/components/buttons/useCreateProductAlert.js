import { useCallback } from "react";
import Swal from "sweetalert2";

export const useCreateProductAlert = () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const showCreateAlert = useCallback(
    async (createFunction) => {
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
          const { message } = await createFunction();

          console.log(message);

          if (message.code === "201") {
            await swalWithBootstrapButtons.fire({
              title: "Create!",
              text: "Your product has been created succesfully.",
              icon: "success",
            });
          } else {
            await swalWithBootstrapButtons.fire({
              title: "Error",
              text: "There was an issue creating your product.",
              icon: "error",
            });
          }
        } catch (error) {
          // Manejo de errores en caso de fallo en createFunction
          console.error("Error creating product:", error);
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
          text: "Your product has not created",
          icon: "error",
        });
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
    },
    [swalWithBootstrapButtons],
  );

  return { showCreateAlert };
};
