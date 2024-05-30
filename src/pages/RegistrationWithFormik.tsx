import React from "react";
import { Formik, Field, Form } from "formik";
import { IRegistrationF } from "@/types/IRegistration";

const RegistrationFormWithFormik = () => {
    const initialValues : IRegistrationF={
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        pAddress: "",
        term: false,
        cAddress: "",
      }
  return (
    <div>
      <h1>Registration Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values:IRegistrationF) => {
          if (values.passwordConfirm === values.password) {
            console.log(values);
          }
        }}
      >
        {({ values }) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="Jane"
              value={values.firstName}
            />

            <label htmlFor="lastName">Last Name</label>
            <Field
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={values.lastName}
            />

            <label htmlFor="pAddress">pAddress</label>
            <Field id="pAddress" name="pAddress" placeholder="pAddress" />
            <label>
              <Field
                type="checkbox"
                name="term"
                onClick={() => {
                  {
                    values.cAddress = values.pAddress;
                  }
                  console.log(values.cAddress);
                }}
              />
            </label>

            <label htmlFor="cAddress">cAddress</label>
            <Field id="cAddress" name="cAddress" placeholder="cAddress" />

            <label htmlFor="password">password</label>
            <Field id="password" name="password" placeholder="password" />

            <label htmlFor="passwordConfirm">passwordConfirm</label>
            <Field id="passwordConfirm" name="passwordConfirm" placeholder="passwordConfirm" />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              value={values.email}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationFormWithFormik;
