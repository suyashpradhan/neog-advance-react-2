import React from "react";
export const UtilComponent = (props) => {
  return (
    <>
      <h1>{props.dataLoader ? "Data Loading..." : "Products"}</h1>
      {props.error && <span>Something went wrong</span>}
    </>
  );
};
