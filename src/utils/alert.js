import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

export const successAlert = () => {
  return MySwal.fire({
    position: 'center',
    icon: 'success',
    title: 'Added to wishlist',
    showConfirmButton: false,
    timer: 2000,
  });
};
