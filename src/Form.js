import { useEffect, useState } from "react";

const Form = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [errors]);

  const validate = (values) => {
    const errs = {};
    if (!values.firstName) {
      errs.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errs.lastName = "Last Name is required";
    }
    if (!values.email) {
      errs.email = "Email is required";
    }
    if (!values.message) {
      errs.message = "please enter a message";
    }
    return errs;
  };

  const handleDisable = () => {
    const formCheck = document.getElementById("form__check");
    const btn = document.getElementById("btn__submit");
    formCheck.checked
      ? btn.removeAttribute("disabled")
      : (btn.disabled = "true");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-names">
          <div className="name-input">
            <label className="label" htmlFor="first_name">
              first name
            </label>
            <input
              type="text"
              name="firstName"
              className={errors.firstName ? "input error-border" : "input"}
              id="first_name"
              placeholder="enter your first name"
              value={values.firstName}
              onChange={handleChange}
            />
            <p className="error-text">{errors.firstName}</p>
          </div>
          <div className="name-input">
            <label className="label" htmlFor="last_name">
              last name
            </label>
            <input
              type="text"
              name="lastName"
              className={errors.lastName ? "input error-border" : "input"}
              id="last_name"
              placeholder="enter your last name"
              value={values.lastName}
              onChange={handleChange}
            />
            <p className="error-text">{errors.lastName}</p>
          </div>
        </div>
        <div className="email-input">
          <label className="label" htmlFor="email">
            email
          </label>
          <input
            type="email"
            name="email"
            className={errors.email ? "input error-border" : "input"}
            id="email"
            placeholder="yourname@gmail.com"
            value={values.email}
            onChange={handleChange}
          />
          <p className="error-text">{errors.email}</p>
        </div>
        <div className="message-input">
          <label className="label" htmlFor="message">
            message
          </label>
          <textarea
            id="message"
            name="message"
            className={errors.message ? "error-border" : ""}
            placeholder="send me a message and i will reply you as soon as possible..."
            value={values.message}
            onChange={handleChange}
          ></textarea>
          <p className="error-text">{errors.message}</p>
        </div>
        <div className="checkbox-input">
          <input
            type="checkbox"
            id="form__check"
            onClick={handleDisable}
            required
          />
          <label>
            You agree to providing your data to Nonso who may contact you
          </label>
        </div>
        <button className="btn" id="btn__submit" type="submit" disabled>
          Send message
        </button>
      </form>
    </div>
  );
};

export default Form;
