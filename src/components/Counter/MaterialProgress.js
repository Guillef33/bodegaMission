import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Swal from "sweetalert2";
// import Swal from "sweetalert2";
import "./progressBar.css";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="h3"
          className="counter-text"
          // color="text.secondary"
        >
          {`${Math.round(props.value)}`}
        </Typography>
      </Box>
    </Box>
  );
}
// const endOfTimeAlert = () => {
//   Swal.fire({
//     title: "Time is Up!",
//     text: "Do you want to try again?",
//     icon: "info",
//     showDenyButton: true,
//     showCancelButton: false,
//     confirmButtonText: "Yes",
//     denyButtonText: `Go to Info`,
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: "great!",
//         text: "good luck",
//       });
//     } else if (result.isDenied) {
//       Swal.fire({
//         title: "redirected",
//       });
//     }
//   });
// };

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(90);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress <= 0 ? 0 : prevProgress - 1));
      // if (prevProgress === 0) {
      //   clearInterval(timer)
      // }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  if (progress === 0) {
    // endOfTimeAlert();
  }
  return <CircularProgressWithLabel value={progress} />;
}
