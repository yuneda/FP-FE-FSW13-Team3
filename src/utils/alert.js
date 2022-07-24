import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

export const successAlert = (title = 'Added to wishlist') => {
  return MySwal.fire({
    position: 'center',
    icon: 'success',
    title,
    showConfirmButton: false,
    timer: 2000,
  });
};

export const errorAlert = (text) => {
  return MySwal.fire({
    icon: 'error',
    title: 'Oops...',
    text,
  });
};

export const customAlert = (
    icon = 'success',
    text = '',
    title = false
  ) => {
  return MySwal.fire({
    icon,
    title,
    text,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
};
