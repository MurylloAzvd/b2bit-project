import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import api from "../services/api";
import { login } from "../services/auth";
import { useHistory } from "react-router-dom";
import b2bitLogo from '../assets/b2bit-logo.png'

function Login() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const history = useHistory();

    return (
        <div className="flex flex-col md:flex-row justify-evenly items-center h-screen px-6">
            <img src={b2bitLogo} alt="Logo" className="mt-12 md:mt-0" />
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={values => {
                    setLoading(true);
                    api
                        .post("/auth/token/", values)
                        .then((res) => {
                            setLoading(false);
                            setError(false);
                            login(res.data.tokens.access);
                            history.push("/");
                        })
                        .catch((err) => {
                            setLoading(false);
                            setError(true);
                            console.log(err);
                        })
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Campo inválido')
                        .required('Campo obrigatório'),
                    password: Yup.string()
                        .min(6, 'Senha deve ter no mínimo 6 dígitos')
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
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-grey-darker text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                placeholder="Digite seu email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
                            />
                            {errors.email && touched.email && (
                                <p className="text-red-600 text-xs italic">{errors.email}</p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-grey-darker text-sm font-bold mb-2">
                                Senha
                            </label>
                            <input
                                id="password"
                                placeholder="Digite sua senha"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                            />
                            {errors.password && touched.password && (
                                <p className="text-red-600 text-xs italic">{errors.password}</p>
                            )}
                        </div>

                        <button type="submit" className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded flex items-center justify-center">
                            {
                                loading ?
                                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900" />
                                    :
                                    'Entrar'
                            }
                        </button>
                        {
                            error && <p className="text-red-600 text-sm text-center mt-6">Email ou senha incorretos. Tente novamente!</p>
                        }
                    </form>
                )}
            </Formik>
        </div>

    );

}

export default Login;
