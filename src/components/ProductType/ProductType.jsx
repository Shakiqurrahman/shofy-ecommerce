import React from "react";
import "./ProductType.css";

const ProductType = () => {
  const productTypeData = [
    {
      productName: "Headphones",
      productImg: "/images/headphone.png",
      productAvailability: "23 Product",
    },
    {
      productName: "Mobile Phone",
      productImg: "/images/Mobile Phone.png",
      productAvailability: "18 Product",
    },
    {
      productName: "CPU Heat Pipes",
      productImg: "/images/cpu.webp",
      productAvailability: "52 Product",
    },
    {
      productName: "Smart Watch",
      productImg: "/images/smart watch.png",
      productAvailability: "63 Product",
    },
  ];
  return (
    <>
      {productTypeData.map((data,idx) => (
        <div key={idx}>
         <div className="box">
          <div className="img-box">
            <img src={data.productImg} alt='' />
          </div>
          <div className="details">
            <h6 className="details-title">{data.productName}</h6>
            <p>{data.productAvailability}</p>
          </div>
        </div>
        </div>
      ))}
    </>
  );
};

export default ProductType;
