import React, { useContext } from "react";
import "./ProductType.css";
import { ShopContext } from "../../contexts/shop-context";

const ProductType = () => {
  const {  products } = useContext(ShopContext);
  const productAvailability = (product) => {
    const available = products.filter((p) => {
      return p?.category === product.toLowerCase();
    });
    return available.length;
  }

  const productTypeData = [
    {
      productName: "Headphones",
      productImg: "/images/headphone.png",
      productAvailability: productAvailability("Headphone"),
    },
    {
      productName: "Mobile Phone",
      productImg: "/images/Mobile Phone.png",
      productAvailability: productAvailability("Mobile Phone"),
    },
    {
      productName: "CPU Heat Pipes",
      productImg: "/images/cpu.webp",
      productAvailability: productAvailability("CPU"),
    },
    {
      productName: "Smart Watch",
      productImg: "/images/smart watch.png",
      productAvailability: productAvailability("Smart Watch"),
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
            <p>{data.productAvailability} Products</p>
          </div>
        </div>
        </div>
      ))}
    </>
  );
};

export default ProductType;
