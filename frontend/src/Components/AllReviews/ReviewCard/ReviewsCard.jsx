import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import profile from "../../../image/Profile.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const ReviewsCard = ({ product }) => {
  //     const[allReviews,setAllReviews] = useState()
  //     console.log(allReviews);
  //     useEffect(() => {},[allReviews])
  // {
  //     product.reviews.map((review) => setAllReviews(review))
  // }
console.log(product);
  const options = {
    value: product?.reviews[0]?.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
  
    <Card className="w-96">
    <CardBody className="mt-2">
      <Typography variant="h5" className="mb-2">
      {product?.reviews[0]?.name}
      </Typography>
      <Typography color="blue" className="mt-8">
      {product?.reviews[0]?.comment}
      </Typography>
    </CardBody>
    <CardFooter>
     <Rating {...options}/>    
    </CardFooter>
  </Card>
  );
};

export default ReviewsCard;
