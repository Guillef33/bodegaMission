import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import "./progressBar.css";

function CircularProgressWithLabel(props, { timeIsUp, setTimeIsUp }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        timeIsUp={timeIsUp}
        setTimeIsUp={setTimeIsUp}
        variant="determinate"
        {...props}
      />
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
          color={props.value < 10 ? "red" : "white"}
          component="h3"
          fontSize={18}
          // className="counter-text"
          // color="text.secondary"
        >
          {`${Math.round(props.value)}`}
        </Typography>
      </Box>
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

export default function CircularStatic({ timeIsUp, setTimeIsUp }) {
  const [progress, setProgress] = React.useState(99);

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
