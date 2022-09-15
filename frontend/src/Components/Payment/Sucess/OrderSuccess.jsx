import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "../../Header/Navbar";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <Navbar/>
      <CheckCircleIcon />

      <Typography>Your Booking has been Placed successfully </Typography>
      <Link to="/orders">View Booking</Link>
    </div>
  );
};

export default OrderSuccess;
