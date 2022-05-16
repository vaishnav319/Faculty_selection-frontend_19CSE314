import React from "react";
import Moment from "react-moment";
const Date = ({ date }) => {
  return (
    <>
      <Moment format="DD/MM/YYYY">{date}</Moment>
    </>
  );
};

export default Date;
