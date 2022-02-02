//fetch data useState
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UserFetchingDetails() {
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const params = useParams();
  const userId = params.userId;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setLoading(false);
        setUser(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setUser({});
        setError("Something went wrong");
      });
  }, [id]);

  return (
    <div className="App pd divcolor2">
      <h2>Details </h2>
      <br />
      {loading ? (
        "Loading"
      ) : (
        <div>
          <label htmlFor="quantity">Enter Id</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="10"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
          <h1>{user.name} </h1>
          <h2>
            Address - {user?.address?.street}, {user?.address?.suite}, City of{" "}
            {user?.address?.city}
          </h2>

          {/* <button
            value={id}
            onChange={(e) => setId(e.target.value)}
            onClick={() => setId(id + 1)}
          >
            +
          </button>
          <button
            value={id}
            onChange={(e) => setId(e.target.value)}
            onClick={() => setId(id - 1)}
          >
            -
          </button> */}
        </div>
      )}
      {error ? error : null}
    </div>
  );
}

export default UserFetchingDetails;
