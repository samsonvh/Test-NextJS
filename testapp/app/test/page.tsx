import React from "react";

const page = async () => {
  const a = await fetch("http://112.213.91.196:7000/api/v1/membership-packages").then(res => res.json());

  return <div>{a.pageCount}</div>;
};

export default page;
