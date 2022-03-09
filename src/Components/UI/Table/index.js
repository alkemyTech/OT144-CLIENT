import React from "react";
import PropTypes from "prop-types";
import "./table.css";
export default function index({ fields, scopedSlots, data, header }) {
  const GenerateRow = (index) => {
    return Object.keys(scopedSlots).map((key) => scopedSlots[key](data[index]));
  };

  return (
    <section className="sectionTable">
      <table className="table">
        <thead>
          {header && (
            <tr>
              <td>
                <h1 className="title">{header.title}</h1>
              </td>
              {header.button && (
                <td>
                  {header.button()}
                </td>
              )}
            </tr>
          )}
          <tr>
            {fields.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={data.id}>{GenerateRow(index)}</tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

index.propTypes = {
  fields: PropTypes.array.isRequired,
  scopedSlots: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};
