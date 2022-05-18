import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const result = await axios.get("http://localhost:3005/users");
    setUsers(result.data.reverse());
    // console.log(result);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3005/users/${id}`);
    fetchUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <div className="d-flex justify-content-between">
          <div>
            <h2>Home</h2>
          </div>
          <div>
            <Link
              to="/user/add"
              className="btn btn-outline-primary"
              type="submit"
            >
              Add User
            </Link>
          </div>
        </div>
        <div className="d-flex">
          <table className="table border">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      to={`/user/${user.id}`}
                      className="btn btn-primary m-1"
                    >
                      View
                    </Link>
                    <Link
                      to={`/user/edit/${user.id}`}
                      className="btn btn-outline-primary m-1"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/`}
                      className="btn btn-danger m-1"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
