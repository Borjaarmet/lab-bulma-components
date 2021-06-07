import React from "react";
import "bulma/css/bulma.css";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/Formfield";
import CoolButton from "../coolbutton/Coolbutton";

const Signup = (props) => {
  return (
    <main>
      <div>
        <Navbar />
        <div>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <FormField label="Password" type="password" placeholder="*******" />
        </div>
        <div className=" is-flex is-justify-content-center">
          <CoolButton
            isSuccess
            className="is-rounded is-large m-6"
            buttonName="Button 1"
          ></CoolButton>
          <CoolButton
            isDanger
            className="is-rounded is-large m-6"
            buttonName="Button 2"
          ></CoolButton>
        </div>
      </div>
    </main>
  );
};

export default Signup;
