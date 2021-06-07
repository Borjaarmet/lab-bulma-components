import React from "react";
import "bulma/css/bulma.css";

const FormField = ({ label, type, placeholder }) => {
  return (
    <div className="field ml-6 mt-4 is-flex is-justify-content-center is-align-items-center ">
      <label className="label is-size-3 mr-4">{label}</label>
      <input className="is-size-3" type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormField;
