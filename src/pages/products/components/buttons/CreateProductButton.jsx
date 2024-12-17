import Swal from "sweetalert2";

const CreateButton = ({createFunction}) =>{

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
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

            const {data} = await createFunction();
           
            if (data && data.code == '201') {
              console.log(data)
              await swalWithBootstrapButtons.fire({
                title: "Create!",
                text: "Your product has been created succesfully.",
                icon: "success"
              });
             } else {
              console.log(data)
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
            icon: "error"
          });
        }
      };
    
      return <button onClick={showCreateAlert} className="submit-button">Create</button>;
}

export default CreateButton;
