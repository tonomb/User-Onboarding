import React from "react";
import "../App.css";

function Form(props) {
  const { onSubmit, onInputChange, onCheckedChange, errors, disabled, formValues } = props;

  return (
    <div>
      <h1 className="form-title">
        Welcome.<br></br>Please create an account
      </h1>
      <form className="form" onSubmit={onSubmit}>
        <label className="form-label">
          Enter your Name
          <input
            value={formValues.name}
            className="form-input"
            type="text"
            name="name"
            onChange={onInputChange}
          />
          {errors.name ? <p className="error">{errors.name}</p> : null}
        </label>
        <label className="form-label">
          Your email address
          <input
            value={formValues.email}
            className="form-input"
            type="email"
            name="email"
            onChange={onInputChange}
          />
          {errors.email ? <p className="error">{errors.email}</p> : null}
        </label>
        <label className="form-label">
          And your password
          <input
            value={formValues.password}
            className="form-input"
            type="password"
            name="password"
            onChange={onInputChange}
          />
          {errors.password ? <p className="error">{errors.password}</p> : null}
        </label>
        <label className="form-label">
          <input checked={formValues.terms} type="checkbox" name="terms" onChange={onCheckedChange} />I
          accept the Terms Of Service
          {errors.terms ? <p className="error">{errors.terms}</p> : null}
        </label>
        <button disabled={disabled}>Create Accout</button>
      </form>
    </div>
  );
}

export default Form;
