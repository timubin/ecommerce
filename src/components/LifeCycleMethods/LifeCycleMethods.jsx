import React, { useState, useEffect } from "react";

const LifeCycleMethods = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  const [count, setCount] = useState(0);
  const [post, setPhost] = useState([]);

  useEffect(() => {
    let time = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((json) => setPhost(json));
  }, []);

  return (
    <>
      <h2>{date}</h2>

      <h2></h2>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>

      <ul>
        {post.map((post) => (
          <li style={{ listStyle: "none", textAlign: "center" }}>
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default LifeCycleMethods;
