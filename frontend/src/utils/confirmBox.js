import Swal from "sweetalert2";

const confirmBox = async (message) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    confirmButtonColor: "#e11d48",
    cancelButtonColor: "#64748b"
  });

  return result.isConfirmed;
};

export default confirmBox;