import Swal from "sweetalert2";

const EditProductButton = ({ editFunction }) => {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
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

            try {

                const { data } = await editFunction();

                if (data && data.code == '200') {

                    await swalWithBootstrapButtons.fire({
                        title: "Edited!",
                        text: "Your product has been edited succesfully.",
                        icon: "success"
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
                icon: "error"
            });
        }
    };

    return <button onClick={showEditalert} className="submit-button">Edit</button>;
}

export default EditProductButton;
