import React from "react";
import "./Table.css";

export default function Table(props) {

    function handleDelete(index) {
      props.setMessage((message) => message.filter((_, i) => i !== index));
    }

  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {props.message.map((data, index) => (
            <tr key={index}>
              <td key={data.name}>{data.name}</td>
              <td key={data.job}>{data.job}</td>
              <td>
                <button
                  className="del-btn"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
