import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

function App() {

  return (
    <div>

      <Formik
        initialValues={{ email: "" }}
        onSubmit={values => {
          console.log('submit', values)
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("estilo email")
            .required("obrigatório mano")
        })}
      >
        {({
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <div>{errors.email}</div>
            )}

            <button
              type="button"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>


          </form>
        )}
      </Formik>

    </div>
  );

}

export default App;
