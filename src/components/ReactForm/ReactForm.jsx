import React, { useState } from "react";

const ReactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  const onChangeHandlar = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const dataSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    fetch("http://localhost:3000/user", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <form action="">
        <input
          name="name"
          onChange={onChangeHandlar}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          name="email"
          onChange={onChangeHandlar}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          name="password"
          onChange={onChangeHandlar}
          type="password"
          placeholder="Password"
        />
        <br />
        <button
          onClick={(e) => {
            dataSubmit(e);
          }}
        >
          Submit
        </button>
      </form>
      <hr />
      {submit && (
        <div>
          <p>Name:-{name}</p>
          <p>Email:-{email}</p>
          <p>Pass:-{password}</p>
        </div>
      )}
    </>
  );
};

export default ReactForm;
