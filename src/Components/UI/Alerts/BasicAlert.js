import Swal from "sweetalert2";

const BasicAlert = (type = "success", title = "", text = "", timer = 1500) => {
  return Swal.fire({
    icon: type,
    title,
    text,
    showConfirmButton: false,
    timer,
  });
};

export default BasicAlert;
