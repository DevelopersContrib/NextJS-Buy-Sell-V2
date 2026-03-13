"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import LoadingState from "../LoadingState";
import ErrorBlock from "../ErrorBlock";

const BuyForm = ({ domain, countries, setSuccess }) => {
  const routerQuery = useSearchParams();

  const formData = {
    isLoading: false,
    domain: domain,
    amount: routerQuery.get("offer"),
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country_id: countries[0].country_id,
    country: countries[0].name,
    phone: "+1",
    message: "",
    contactBy: "",
  };

  const initialErrors = {
    validate: false,
    amountError: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    countryError: "",
    phoneError: "",
    isValidPhone: false,
    messageError: "",
    contactByError: "",
  };

  const [data, setData] = useState(formData);
  const [errors, setErrors] = useState(initialErrors);

  

  const handleCountryChange = (e) => {
    const val = e.target.value.split("::");

    console.log(e.target.value);

    setData((prevData) => {
      return {
        ...prevData,
        ...{
          [e.target.name]: val[0],
          country: e.target.options[e.target.selectedIndex].text,
          phone: val[1],
          phoneCode: val[1],
        },
      };
    });
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = !Object.values(errors).some((v) => v);
    setErrors({ ...errors, ["validate"]: true });

    if (isValid) {
      setData({ ...data, ["isLoading"]: true });
      try {
        const response = await fetch("/api/buy", {
          method: "POST",
          body: JSON.stringify(data),
        });

        setData({ ...data, ["isLoading"]: false });

        if (response.ok) {
          const res = await response.json();

          if (res.status) {
            setSuccess(true);
            console.log("done....");
          }
        } else {
          alert("An error occurred");
        }
      } catch (error) {
        console.log(error);
      } finally {
        //set
      }
    }
  };

  useEffect(() => {
    const validateForm = () => {
      const dataErrors = {
        amountError:
          (data.amount ? "" : "Amount is required.") ||
          (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\\s\\./0-9]*$/g.test(data.amount)
            ? ""
            : "Invalid Amount."),
        firstNameError: data.firstName ? "" : "First name is required.",
        lastNameError: data.lastName ? "" : "Last name is required.",
        emailError:
          (data.email ? "" : "Email is required") ||
          (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? "" : "Invalid Email"),
        passwordError: data.password ? "" : "Password is required.",
        confirmPasswordError:
          (data.confirmPassword ? "" : "Confirm password is required.") ||
          (data.password !== data.confirmPassword
            ? "Confirm password did not match."
            : ""),
        countryError: data.country_id ? "" : "Country is required.",
        phoneError:
          (data.phone ? "" : "Phone is required.") ||
          (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\\s\\./0-9]*$/g.test(data.phone)
            ? ""
            : "Invalid Phone."),
        messageError: data.message ? "" : "Message is required.",
        contactByError: data.contactBy ? "" : "Contact method is required.",
      };
      setErrors(dataErrors);
    };
    validateForm();
    // validateErrors();
  }, [data]);

  return (
    <>
      {data.isLoading ? (
        <LoadingState />
      ) : (
        <div className="col-xl-12">
          <div className="tw-w-full">
            <div className="tw-pr-0">
              {/* Start:: Step 1 */}
              <div className="row">
                <div className="col-xl-12 tw-text-center mb-3">
                  <h2 className="tw-text-2xl md:tw-text-3xl tw-font-semibold tw-text-white">
                    Make your offer for {domain}
                  </h2>
                  <p className="tw-text-zinc-400 tw-text-sm">Submit your details to get started.</p>
                </div>
                <div className="col-xl-12">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Amount <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="amount"
                      value={data.amount}
                      onChange={handleInputChange}
                      className="form-control form-control-lg"
                    />
                    {errors.validate ? (
                      <ErrorBlock msg={errors.amountError} />
                    ) : null}
                  </div>
                  <div className="row">
                    <div className="col-xl-6 mb-3">
                      <label htmlFor="" className="form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        name="firstName"
                        value={data.firstName}
                        onChange={handleInputChange}
                        type="text"
                        className="form-control form-control-lg"
                      />
                      {errors.validate ? (
                        <ErrorBlock msg={errors.firstNameError} />
                      ) : null}
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label htmlFor="" className="form-label">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        name="lastName"
                        value={data.lastName}
                        onChange={handleInputChange}
                        type="text"
                        className="form-control form-control-lg"
                      />
                      {errors.validate ? (
                        <ErrorBlock msg={errors.lastNameError} />
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={data.email}
                      onChange={handleInputChange}
                      className="form-control form-control-lg"
                    />
                    {errors.validate ? (
                      <ErrorBlock msg={errors.emailError} />
                    ) : null}
                  </div>
                  <div className="row">
                    <div className="col-xl-6 mb-3">
                      <label htmlFor="" className="form-label">
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleInputChange}
                        className="form-control form-control-lg"
                      />
                      {errors.validate ? (
                        <ErrorBlock msg={errors.passwordError} />
                      ) : null}
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label htmlFor="" className="form-label">
                        Confirm Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={handleInputChange}
                        className="form-control form-control-lg"
                      />
                      {errors.validate ? (
                        <ErrorBlock msg={errors.confirmPasswordError} />
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 mb-3">
                      <label htmlFor="" className="form-label">
                        Choose Country <span className="text-danger">*</span>
                      </label>
                      <select
                        name="country_id"
                        value={data.country_id}
                        onChange={handleCountryChange}
                        className="form-select form-select-lg"
                      >
                        {countries.map((country) => (
                          <option
                            key={country.country_id}
                            value={
                              country.country_id +
                              "::" +
                              "+" +
                              country.phone_code
                            }
                          >
                            {country.name}
                          </option>
                        ))}
                      </select>
                      {errors.validate ? (
                        <ErrorBlock msg={errors.countryError} />
                      ) : null}
                    </div>
                    <div className="col-xl-6 mb-3">
                      <label htmlFor="" className="form-label">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        name="phone"
                        value={data.phone}
                        onChange={handleInputChange}
                        type="text"
                        className="form-control form-control-lg"
                      />
                      {errors.validate ? (
                        <ErrorBlock msg={errors.phoneError} />
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      How do you wish to be contacted?{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      name="contactBy"
                      value={data.contactBy}
                      onChange={handleInputChange}
                      className="form-select form-select-lg"
                    >
                      <option value=""></option>
                      <option value="SMS">SMS</option>
                      <option value="Email">Email</option>
                    </select>
                    {errors.validate ? (
                      <ErrorBlock msg={errors.contactByError} />
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={data.message}
                      onChange={handleInputChange}
                      rows="3"
                      className="form-control form-control-lg"
                    ></textarea>
                    {errors.validate ? (
                      <ErrorBlock msg={errors.messageError} />
                    ) : null}
                  </div>
                  <div className="mb-3 d-grid">
                    <a
                      href=""
                      className="btn btn-primary py-3"
                      onClick={handleSubmit}
                    >
                      Submit
                    </a>
                  </div>
                  <div className="text-center">
                    <Link href="/partner" className="tw-no-underline tw-text-zinc-400 hover:tw-text-white tw-transition-colors">
                      Or partner with this domain
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyForm;
