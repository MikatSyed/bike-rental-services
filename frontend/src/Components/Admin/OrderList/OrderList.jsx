import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "../ProductList/ProductList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../../MetaData/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "../Sidebar/Sidebar";
import './OrderList.css'
import {
  deleteOrder,
  getAllOrders,
  clearError,
} from "../../../Actions/OrderAction";
import { DELETE_ORDER_RESET } from "../../../Constants/OrderConstants";
import WorkerOrderList from "./WorkerOrderList";
import BookingTable from "./BookingTable";

const OrderList = ({ history }) => {
  const [booking,setBooking] = useState()
  console.log(booking);
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, orders } = useSelector((state) => state.allOrders); 
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);


  return (
    <Fragment>
      <MetaData title={`ALL ORDERS - Admin`} />
      {user?.worker === "no" ? <>
       <BookingTable/>
      </> : <>
        <WorkerOrderList/>
      </>
      }
    </Fragment>
  );
};

export default OrderList;
