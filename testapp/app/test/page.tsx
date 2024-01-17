import React from "react";

const page = async () => {
  const a = await fetch("https://capstonefa23.vn/api/v1/membership-packages").then(res => res.json());

  return <div>{a.pageCount}</div>;
};

export default page;
