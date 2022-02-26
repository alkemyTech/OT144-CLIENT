import React from "react";

const UsersTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maria</td>
            <td>maria@gmail.com</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Paul</td>
            <td>paul@gmail.com</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>John</td>
            <td>john@gmail.com</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
