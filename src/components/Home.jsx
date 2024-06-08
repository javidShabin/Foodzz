import React from "react";

export default function Home(props) {
  let image = props.cardContent.imgSrc;
  return (
    <>
      <img src={image} alt="Banner images" />
    </>
  );
}
