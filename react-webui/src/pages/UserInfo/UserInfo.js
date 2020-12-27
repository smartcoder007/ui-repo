import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { GetApi } from "../../services/service";

const UserInfo = () => {
  const [users, setUsers] = useState({});

  const getUsers = () => {
    return GetApi("https://gorest.co.in/public-api/users")
      .then((response) => response)
      .then((response) => {
        console.log(response);
        //updating api response
        setUsers(response);
      })
      .catch((err) => {
        console.log("Error : " + err);
      });
  };

  useEffect(() => {
    // send HTTP request
    // save response to variable
    const response = getUsers();
  }, []);

  return (
    <Container>
      <h6 className="text-center mt-2 text-primary">User Details</h6>
      <Table striped bordered hover className="m-2 p-2">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Create Date</th>
            <th>Last update</th>
          </tr>
        </thead>
        <tbody>
          {users != null &&
            users.data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.status}</td>
                <td>{item.created_at}</td>
                <td>{item.updated_at}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export { UserInfo };
