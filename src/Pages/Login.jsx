import React, { useState } from "react";
import { useFormik } from "formik";
import { Col, Row, Button } from "react-bootstrap";
import { Envelope, Key, Lock, Person, Phone } from "react-bootstrap-icons";
import { schema } from "../validationSchema";
import { Link } from "react-router-dom";

export const Login = () => {
  // let login = true;
  const [login, setLogin] = useState(true);
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
      <Row>
        <h2
          onClick={() => setLogin(false)}
          className="text-center text-info my-4"
        >
          LogIn
        </h2>
        <Col md="4" className="mx-auto">
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            autoComplete="off"
          >
            <div className="input-group mt-3">
              <span className="input-group-text" id="basic-addon2">
                <Envelope color="#E85A4F" />
              </span>
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
            </div>
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}

            <div className="input-group mt-3">
              <span className="input-group-text" id="basic-addon2">
                <Key color="#E85A4F" />
              </span>
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
            </div>
            {errors.password && (
              <small className="text-danger">Incorrect Password</small>
            )}
            <Button
              variant="info"
              type="submit"
              className="d-block mx-auto my-3 text-light shadow px-4"
            >
              LogIn
            </Button>
            <div className="d-flex justify-content-between my-4 px-5 text-center">
              <Link className="text-muted fs-6" onClick={() => setLogin(false)}>
                Create Account
              </Link>
              <Link className="text-muted fs-6">forgot password?</Link>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  ) : (
    <div>
      {/*? All the validation process are coded in "validationSchema/index.js" */}

      <Row>
        <h2 className="text-center text-info my-4"> SignUp</h2>
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
              className="d-block mx-auto my-3 text-light shadow px-5"
            >
              SignUp
            </Button>

            <p className="text-center">
              Already have an account?{" "}
              <Link onClick={() => setLogin(true)}>Login</Link>{" "}
            </p>
          </form>
        </Col>
      </Row>
    </div>
  );
};
