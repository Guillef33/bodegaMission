import Swal from "sweetalert2";

import './ui.scss';

//esto podría escalar creando funciones que reciban por parámetro distintos sets para el toast
export const Toast = Swal.mixin({
  toast: true,
  position: 'bottom',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: false,
  width: 220,

  customClass: {
    container:'toast-container'
  },

  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

