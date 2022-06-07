import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Users = ({users}) => {

    const Navigate = useNavigate();

  return (
    <Fragment>
        <h1 className="text-center py-5">User-list</h1>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user,index) => {
                    return(
                        <Fragment key={index}>
                            <tr onClick={() => {
                                Navigate(`/${user.login.uuid}`)
                            }}>
                                <td>{user.name.title} {user.name.first} {user.name.last}</td>
                                <td>{user.gender}</td>
                                <td>{user.location.city}</td>
                                <td>{user.location.state}</td>
                                <td>{user.location.country}</td>
                            </tr>
                        </Fragment>
                    )
                })
            }
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Users;
