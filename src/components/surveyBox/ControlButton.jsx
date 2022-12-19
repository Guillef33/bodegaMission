import React, { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AppContext } from "../../context/AppContext";
import { inCollection } from "../../helpers/validationsContext";
import { Toast } from "../../ui/toast";

import "./scss/ControlButton.scss";

const ControlButton = ({
  type,
  limit,
  initial,
  currentScreen,
  setCurrentScreen,
}) => {
  const { formResp } = useContext(AppContext);

  console.log(formResp);
  console.log(currentScreen);

  const handleClick = async (op) => {
    switch (currentScreen) {
      case 0:
        if (op > 0) {
          if (inCollection(1, formResp)) {
            setCurrentScreen(currentScreen + op);
          } else {
            await Toast.fire({
              icon: "warning",
              title: "Choose an answer",
            });
          }
          break;
        } else {
          setCurrentScreen(currentScreen + op);
        }
        break;

      case 1:
        if (op > 0) {
          if (
            inCollection(2, formResp) &&
            inCollection(3, formResp) &&
            inCollection(4, formResp)
          ) {
            setCurrentScreen(currentScreen + op);
          } else {
            await Toast.fire({
              icon: "warning",
              title: "Choose an answer",
            });
          }
          break;
        } else {
          setCurrentScreen(currentScreen + op);
        }
        break;
      case 2:
        if (op > 0) {
          if (
            inCollection(5, formResp) &&
            inCollection(6, formResp) &&
            inCollection(7, formResp)
          ) {
            setCurrentScreen(currentScreen + op);
          } else {
            await Toast.fire({
              icon: "warning",
              title: "Choose an answer",
            });
          }
          break;
        } else {
          setCurrentScreen(currentScreen + op);
        }
        break;
      case 3:
        if (op > 0) {
          if (inCollection(8, formResp)) {
            setCurrentScreen(currentScreen + op);
          } else {
            await Toast.fire({
              icon: "warning",
              title: "Choose an answer",
            });
          }
          break;
        } else {
          setCurrentScreen(currentScreen + op);
        }
        break;
      case 4:
        if (op > 0) {
          if (
            inCollection(9, formResp) &&
            formResp[10].answerOptions.length === 3
          ) {
            setCurrentScreen(currentScreen + op);

            console.log(currentScreen);
          } else {
            await Toast.fire({
              icon: "warning",
              title: "Choose three answers",
            });
          }
          break;
        } else {
          setCurrentScreen(currentScreen + op);

          console.log(currentScreen, "else");
        }
        break;
      case 5:
        if (op > 0) {
          if (inCollection(10, formResp)) {
            setCurrentScreen(currentScreen + op);
          } else {
            await Toast.fire({
              icon: "warning",
              title: "Choose an answer",
            });
          }
          break;
        } else {
          setCurrentScreen(currentScreen + op);
        }
        break;
      case 6:
        if (op > 0) {
          if (inCollection(11, formResp)) {
            setCurrentScreen(currentScreen + op);
          } else {
            await Toast.fire({
              icon: "warning",
              title: "Choose an answer",
            });
          }
          break;
        } else {
          setCurrentScreen(currentScreen + op);
        }
        break;
      default:
        break;
    }
  };

  switch (type) {
    case "next":
      return (
        <div className="box-form-control box-form-control--rigth">
          <button
            className="button-icon"
            disabled={currentScreen >= limit ? true : false}
            onClick={() => {
              handleClick(1);
            }}
          >
            <IoIosArrowForward />
          </button>
          <span>Next</span>
        </div>
      );
    case "back":
      return (
        <div className="box-form-control box-form-control--left">
          <button
            className="button-icon"
            disabled={currentScreen <= initial ? true : false}
            onClick={() => {
              handleClick(-1);
            }}
          >
            <IoIosArrowBack />
          </button>
          <span>Back</span>
        </div>
      );

    default:
      break;
  }
};

export default ControlButton;
