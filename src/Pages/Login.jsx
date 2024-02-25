import React, { useState } from "react";
import { useFormik } from "formik";
import { Col, Row, Button } from "react-bootstrap";
import { Envelope, Key, Lock, Person, Phone } from "react-bootstrap-icons";
import { schema } from "../validationSchema";

export const Login = () => {
  let login = true;
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      uName: "",
      email: "",
      phn: "",
      password: "",
      cPassword: "",
    },
    validationSchema: schema,
    onSubmit: () => {
      console.log(values);
    },
  });

  return login ? (
    <div>
      <h2 onClick={() => setLogin(null)}>Login</h2>

      {/*? All the validation process are coded in "validationSchema/index.js" */}

      <Row>
        <Col md="4" className="mx-auto">
          <form action="" onSubmit={handleSubmit}>
            <div className="input-group mt-3">
              <span className="input-group-text" id="basic-addon1">
                <Person color="#E85A4F" />
              </span>
              <input
                id="uName"
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                value={values.uName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.uName && (
              <small className="text-danger">{errors.uName}</small>
            )}

            <div className="input-group mt-3">
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="example@ex.com"
                aria-label="Enter email"
                aria-describedby="basic-addon2"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="input-group-text" id="basic-addon2">
                <Envelope color="#E85A4F" />
              </span>
            </div>
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
            <div className="input-group mt-3">
              <span className="input-group-text" id="basic-addon2">
                <Phone color="#E85A4F" />
              </span>
              <input
                id="phn"
                type="text"
                className="form-control"
                placeholder="98765 43210"
                aria-label="Enter Mobile number"
                aria-describedby="basic-addon2"
                value={values.phn}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.phn && <small className="text-danger">{errors.phn}</small>}

            <div className="input-group mt-3">
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Enter password"
                aria-describedby="basic-addon2"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="input-group-text" id="basic-addon2">
                <Lock color="#E85A4F" />
              </span>
            </div>
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}

            <div className="input-group mt-3">
              <span className="input-group-text" id="basic-addon2">
                <Key color="#E85A4F" />
              </span>
              <input
                id="cPassword"
                type="password"
                className="form-control"
                placeholder="Re-enter password"
                aria-label="Re-enter password"
                aria-describedby="basic-addon2"
                value={values.cPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.cPassword && (
              <small className="text-danger">{errors.cPassword}</small>
            )}

            <Button
              variant="info"
              type="submit"
              className="d-block mx-auto my-5 text-light shadow px-5"
            >
              SignUp
            </Button>
          </form>
        </Col>
      </Row>
    </div>
  ) : (
    <div>
      <h2 onClick={() => setLogin("login")}>SignUp</h2>
      <form action="" onSubmit={(e) => e.preventDefault()}></form>
    </div>
  );
};
