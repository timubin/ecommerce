import React, { useState, useEffect } from "react";

const HookRoles = () => {
  const [count, setCount] = useState(0);
  const [update, setUpdate] = useState(1);
  useEffect(() => {
    setCount(count + 1);
  }, [update]);
  return (
    <div>
      <h2
        onClick={() => {
          setUpdate(update + 1);
        }}
      >
        {update}
      </h2>

      <h2>This is hook {count}</h2>
    </div>
  );
};

export default HookRoles;
