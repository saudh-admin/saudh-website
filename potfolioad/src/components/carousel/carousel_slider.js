import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product.js";
import { productData, responsive } from "./data";
import './Carousel.scss';

const CarouselSlider = () => {
    const product = productData.map((item) => (
        <Product
          name={item.name}
          url={item.imageurl}
          price={item.price}
          description={item.description}
        />
      ));
  return (
    <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
  );
};

export default CarouselSlider;