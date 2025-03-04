import React from "react";
import Product from "./Product";
import Slider from "react-slick";

function LeftArrow(props) {
  const { className, onClick } = props;
  return (
    <button onClick={onClick} className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15">
        <path
          fill="red"
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        />
      </svg>
    </button>
  );
}

function RightArrow(props) {
  const { className, onClick } = props;
  return (
    <button onClick={onClick} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        fill="red"
        width="15"
      >
        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
      </svg>
    </button>
  );
}

export const ProductsList = ({ products }) => {
  const settings = {
    dots: false,
    speed: 500,
    infinite: products.length > 10,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </Slider>
  );
};
