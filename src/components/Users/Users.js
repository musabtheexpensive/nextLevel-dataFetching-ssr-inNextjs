"use client";
import React, { useEffect, useState } from "react";
import styles from "../../app/posts/Posts.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1 className={styles.header_text}>Total Users : {users.length}</h1>
      {users.map((user) => (
        <div
          key={user.id}
          className="card  bg-gray-200 shadow-xl w-[70%] my-5 mx-auto"
        >
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.website}</p>
          </div>
          <div className="card-actions justify-center my-2">
            <button></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
