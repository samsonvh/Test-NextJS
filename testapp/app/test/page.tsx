import React from "react";

const page = async () => {
  const a = await fetch("https://api.publicapis.org/entries").then(res => res.json());

  return <div>{a.count}</div>;
};

export default page;
