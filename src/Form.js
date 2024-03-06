import React, { useState } from "react";
import "./Form.css";
import Table from "./Table.js";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    job: "",
  });
  const [message, setMessage] = useState([]);


  function handleForm(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage((message) => [...message, formData]);
    setFormData({
      name: "",
      job: "",
    });
  }

    return (
      <div className="Form">
        <form className="table-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            onChange={handleForm}
            name="name"
            value={formData.name}
          />
          <label>Job</label>
          <input
            type="text"
            onChange={handleForm}
            name="job"
            value={formData.job}
          />
          <input type="submit" value="Submit" />
          <Table message={message} setMessage={setMessage} setFormData={setFormData} />
        </form>
      </div>
    );
}
