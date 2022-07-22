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
  return Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text,
  });
};
