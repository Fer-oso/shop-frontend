import Swal from "sweetalert2";

const DeleteProductButton = ({onDelete}) =>{

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
            text: "Your product has been deleted.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your product is safe :)",
            icon: "error"
          });
        }
      });
     } 
     
      return <button onClick={()=> showDeleteAlert()} className="btn btn-danger">Delete</button>;
}

export default DeleteProductButton;
