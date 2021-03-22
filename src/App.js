import React from "react";
import { ProductComponent } from "./ProductComponent";
import { UtilComponent } from "./UtilComponent";
import { UseAxios } from "./useAxios";
import "./styles.css";

export default function App() {
  const { usersData, error, dataLoader } = UseAxios("/api/products");

  return (
    <div className="App">
      <UtilComponent error={error} dataLoader={dataLoader} />
      <div className="card-group">
        <ProductComponent data={usersData} />
      </div>
    </div>
  );
}
