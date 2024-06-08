import React from "react";

export default function Home(props) {
    // Add in variable props data
  let image = props.cardContent.imgSrc;
  return (
    <>
      <img src={image} alt="Banner images" />
    </>
  );
}
