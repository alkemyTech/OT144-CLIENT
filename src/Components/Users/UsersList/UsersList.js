import React from "react";
import UsersTable from "./UsersTable";
import "./UsersList.css";
import "../../TableStyles.css";
import { Link } from "react-router-dom";

const UsersList = () => {
  const users = [
    {
      id: 1,
      name: "Maria",
      email: "maria@gmail.com",
    },
    {
      id: 2,
      name: "Paul",
      email: "paul@gmail.com",
    },
    {
      id: 3,
      name: "John",
      email: "john@gmail.com",
    },
    {
      id: 4,
      name: "Martina",
      email: "martina@gmail.com",
    },
    {
      id: 5,
      name: "Julian",
      email: "julian@gmail.com",
    },
  ];
  return (
    <main className="users-list-container">
      <h1 className="headerTxt">Lista de Usuarios</h1>
      <div className="main-action">
        <Link to="/backoffice/users/create" className="btnAddTable">
          Crear nuevo usuario
        </Link>
      </div>
      <UsersTable users={users} />
    </main>
  );
};

export default UsersList;
