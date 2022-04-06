import * as React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import "./progressBar.css";
const normalise = (value) => ((value - 1) * 100) / (120 - 1);
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        value={normalise(props.value)}
        sx={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 3,
          position: "absolute",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }}
        size={65}
        thickness={3.5}
      />

      <Typography
        // variant="caption"
        color={props.value < 21 ? "red" : "white"}
        fontSize={18}
        fontWeight={300}
        className="counter-text"
        position="relative"
      >
        {`${Math.round(props.value)}`}
      </Typography>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(120);
  const { timeIsUp, setTimeIsUp } = useContext(AppContext);
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
    setTimeIsUp(true);
  }
  return <CircularProgressWithLabel value={progress} />;
}
