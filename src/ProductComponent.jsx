import React from "react";
export const ProductComponent = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id} style={{ width: "18rem" }} className="card">
            <img class="card-img-top" src={item.image} alt={item.name}></img>
            <div class="card-body">
              <p class="card-text">$ {item.price}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
