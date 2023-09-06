import React from "react";
import LastPageHeader from "../../Reuseable Components/LastPageHeader";
import img from "../../Assests/home-banner.svg";

const HomeHeader = () => {
  return (
    <LastPageHeader
      backgroundImage={img}
      heading={"Construction Inc"}
      paragraph={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus erat consectetur eu sapien eget, rhoncus consectetur sem."
      }
      buttonLabel={"VIEW OUR WORK"}
    />
  );
};
export default HomeHeader;
