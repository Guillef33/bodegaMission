import React, { useContext, useState, useRef } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { userSchema } from "./userValidation";
import "./Form.scss";
import { collection, query, where, getDocs } from "firebase/firestore";
import { addDoc } from "@firebase/firestore";
import { db } from "../../data/config";
import Swal from "sweetalert2";
import { AppContext } from "../../context/AppContext";
import emailjs from "@emailjs/browser";

const SurveyForm = () => {
  let navigate = useNavigate();
  const form = useRef();
  const location = useLocation();

  console.log(location);

  const { formResp } = useContext(AppContext);

  // Ojo con esta varoiable es un booleanoi
  const [selectOption, setSelectOption] = useState(false);

  const initialState = {
    name: "",
    email: "",
    option: "",
  };

  const [values, setValues] = useState(initialState);
  const [emailSend, setEmailSend] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSelect = (e) => {
    const { value, name } = e.target;
    console.log(selectOption);
    setSelectOption(true);
    setValues({ ...values, [name]: value });
  };

  const surveySubmit = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      option: event.target[2].value,
    };

    const formRespMapped = formResp.map((answer) => {
      const { answerOptions, questionText } = answer;
      const responses = answerOptions.map((answer) => answer.answerText);
      return {
        // question: questionText,
        answer: responses.toString(),
      };
    });

    const respObject = formRespMapped.reduce((acc, resp, idx) => {
      acc["answer" + idx] = resp.answer;
      return acc;
    }, {});

    emailjs
      .send(
        "gmail",
        "template_iurxj7h",
        { ...values, ...respObject },
        "user_vqPFxAk62xt1529ZNfLfd"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(form.current);
        },
        (error) => {
          console.log(error.text);
        }
      );

    let isValid = await userSchema.isValid(formData);
    isValid = true;
    const docRef = await addDoc(collection(db, "surveys"), {
      values,
    });
    setValues(initialState);

    if (location.pathname === "/survey") {
      isValid &&
        Swal.fire(
          {
            title: "Thank you!",
            icon: "success",
            confirmButtonText: "Ok",
            customClass: "button-about",
            timer: 3500,
          },
          isValid && setEmailSend(docRef.id),
          isValid && setTimeout(() => navigate("/results"), 4000)
        );
    } else {
      isValid &&
        Swal.fire(
          {
            title: "Thank you!",
            icon: "success",
            confirmButtonText: "Ok",
            customClass: "button-about",
            timer: 3500,
          },
          isValid && setEmailSend(docRef.id)
        );
    }
  };

  return (
    <div>
      <h3 className="form-h3-survey">
        YOUR NEXT ASSIGNMENT WILL BE GIVEN TO YOU IN THE FOLLOWING EVENT. Book a
        meeting with us:
      </h3>

      <Formik
        validationSchema={userSchema}
        initialValues={{ name: "", email: "", option: "" }}
      >
        {({ errors, touched }) => (
          <Form className="form-wrapper" onSubmit={surveySubmit} ref={form}>
            {location.pathname === "/score" ? null : (
              <label className="survey-label"> Select an option </label>
            )}

            <Field
              name="option"
              as="select"
              placeholder="Pick one option"
              onInput={handleSelect}
              value={values.select}
              className="form-survey-select"
            >
              <option>Pick one option</option>
              <option value="barcelona">
                I want to schedule a meeting at Barcelona Wine Week 6-8 February{" "}
              </option>
              <option value="prowein">
                I want to schedule a meeting at Wine Paris 13-15 February{" "}
              </option>
              <option value="meeting">
                I want to schedule a meeting at ProWein 19-21 March{" "}
              </option>
              <option value="singapur">
                I want to schedule a meeting at Vinexpo Asia 23-25 May{" "}
              </option>
            </Field>
            {errors.select && touched.select ? (
              <p className="validation-Error">{errors.select}</p>
            ) : null}

            {selectOption === true && (
              <>
                {location.pathname === "/score" ? null : (
                  <label className="survey-label"> Your name </label>
                )}

                <Field
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  onInput={handleChange}
                  value={values.name}
                  className="form-survey-input"
                />
                {errors.name && touched.name ? (
                  <p className="validation-Error">{errors.name}</p>
                ) : null}
                {/* <ErrorMessage name="name" /> */}
                {location.pathname === "/score" ? null : (
                  <label className="survey-label"> Your email </label>
                )}
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your e-mail"
                  onInput={handleChange}
                  value={values.email}
                  className="form-survey-input"
                />
                {errors.email && touched.email ? (
                  <p className="validation-Error">{errors.email}</p>
                ) : null}

                {location.pathname === "/score" ? (
                  <button className="send-form-button" type="submit">
                    Submit
                  </button>
                ) : (
                  <button
                    className="send-form-button send-form-button-survey"
                    type="submit"
                  >
                    Submit
                  </button>
                )}
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SurveyForm;
