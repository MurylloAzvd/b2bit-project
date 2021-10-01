import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import api from "./api";
import { login } from "./auth";
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();

    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={values => {
                    api
                        .post("/auth/token/", values)
                        .then((res) => {
                            login(res.data.tokens.access);
                            history.push("/");
                        })
                        .catch((err) => console.log('erro', err))
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email("Campo inválido")
                        .required("Campo obrigatório"),
                    password: Yup.string()
                        .min(6, 'Senha deve ter no mínimo 6 dígitos.')
                        .required('Campo obrigatório'),
                })}
            >
                {({
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" style={{ display: "block" }}>
                            Email
                        </label>
                        <input
                            id="email"
                            placeholder="Enter your email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email && (
                            <div>{errors.email}</div>
                        )}

                        <label htmlFor="password" style={{ display: "block" }}>
                            Password
                        </label>
                        <input
                            id="password"
                            placeholder="Enter your password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && touched.password && (
                            <div>{errors.password}</div>
                        )}

                        <button type="submit">
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );

}

export default Login;
