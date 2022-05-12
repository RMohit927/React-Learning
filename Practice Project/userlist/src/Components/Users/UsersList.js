import React from "react";
// import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <div className="card users">
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
