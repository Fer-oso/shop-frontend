import Swal from "sweetalert2";
import { useCallback } from "react";

export const useEditUserAlert = () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const showEditUserAlert = useCallback(async (editUserFunction) => {
    const result = await swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "Check all fields are correct",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      try {
        const { payload } = await editUserFunction();

        const { message } = payload;

        if (message.code === "201") {
          await swalWithBootstrapButtons.fire({
            title: "Updated!",
            text: "Your user has been updated successfully.",
            icon: "success",
          });
        } else {
          await swalWithBootstrapButtons.fire({
            title: "Error",
            text: "There was an issue updating the user.",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Error updating user:", error);
        await swalWithBootstrapButtons.fire({
          title: "Error",
          text: "There was an unexpected issue. Please try again.",
          icon: "error",
        });
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      await swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your user update was cancelled",
        icon: "error",
      });
    }
  }, []);

  return { showEditUserAlert };
};
