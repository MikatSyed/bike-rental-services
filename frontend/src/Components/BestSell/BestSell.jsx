import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../Actions/OrderAction";
import { Rating } from "@material-ui/lab";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const BestSell = ({ order }) => {
  // console.log(order);
  const { products } = useSelector((state) => state.products);
  console.log(products);
  const allOrderItem = order.orderItems;
  console.log(allOrderItem);
  const newOrderItem = [...new Set(allOrderItem)];
  console.log(newOrderItem);

  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src={newOrderItem[0].image} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {newOrderItem[0].name}
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          {newOrderItem[0].price}(per day)
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <FacebookIcon />
        </Tooltip>
        <Tooltip content="Follow">
          <InstagramIcon />
        </Tooltip>
        <Tooltip content="Follow">
          <TwitterIcon />
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default BestSell;

// import React from "react";
// import { useSelector } from "react-redux";
// import { Rating } from "@material-ui/lab";
// // import { useDispatch, useSelector } from "react-redux";
// // import { getAllOrders } from "../../actions/orderAction";
// // import "./Home.css";

// const BestSell = ({ order} ) => {
//   console.log(order);
//   const { products } = useSelector((state) => state.products);
//   // console.log(order.orderItems[0].product);
//   // console.log(products);
//   // const orderItem = order?.orderItems;
//   // console.log(orderItem);
//   // const newOrderItem = [...new Set(orderItem)];
//   // const product = products.find(
//   //   (product) => product._id === order.orderItems[0].product
//   // );
//   // const dispatch = useDispatch();
//   // const options = {
//   //   value: product.ratings,
//   //   readOnly: true,
//   //   precision: 0.5,
//   // };
//   // const { orders } = useSelector((state) => state.allOrders);
//   //   const [bestProduct, setBestProduct] = useState([]);

//   //   orders?.map((order) => setBestProduct(order.orderItems[0]));
//   //   console.log(bestProduct);

//   // useEffect(() => {
//   //   dispatch(getAllOrders());
//   // }, [dispatch]);

//   const options = {
//     value: products.ratings,
//     readOnly: true,
//     precision: 0.5,
//   };
//   // {order._id && order.orderItems[0].product === products._id }

//   return (
//     <div className="productCard">
//       {/* <img src={newOrderItem[0].image} alt="" />
//       <p>{newOrderItem[0].name}</p>
//       <div>
//         <Rating {...options} />{" "}
//         <span className="productCardSpan">
//           {" "}
//           ({products.numOfReviews} Reviews)
//         </span>
//       </div>
//       <span>{`$${newOrderItem[0].price}`}</span> */}
//     </div>
//   );
// };

// export default BestSell;
