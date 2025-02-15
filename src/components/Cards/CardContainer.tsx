import React from "react";
import Image from "next/image";
import styles from "./CardContainer.module.css";
import Card from "./Card";

// Define the data outside of the component for better performance if data is static
const data = [
  {
    img: "/cards/searchLocation.png",
    name: "Search Location",
    description: "Here you can search your desired location",
  },
  {
    img: "/cards/choose.png",
    name: "Choose Property",
    description: "Here you can choose your right property",
  },
  {
    img: "/cards/property.png",
    name: "Own Property",
    description: "Here you can own your desired property",
  },
];

const CardContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div key={index} className={styles.cardWithArrow}>
          <Card img={item.img} name={item.name} description={item.description} />
          {index !== data.length - 1 && (

            <Image
              src="/cards/rightArrow.png"
              alt="Arrow"
              width={100} // Set the width of the image
              height={100} // Set the height of the image
              className={styles.arrow} // Apply your CSS class
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
