import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const ServiceMain = ({ product }) => {

  const {
    name,
    images,
    numOfReviews,
    price,
    ratings,
    _id,
    category,
    description,
  } = product;
  
  return (
    
    <Card className="w-96">
    <CardHeader color="blue" className="relative h-56">
      <img
        src={images[0].url}
        alt="img-blur-shadow"
        className="h-full w-full"
      />
    </CardHeader>
    <CardBody className="text-center">
      <Typography variant="h5" className="mb-2">
         { ratings} Stars Service
      </Typography>
      <Typography>
       {name}
      </Typography>
    </CardBody>
    <CardFooter divider className="flex items-center justify-between py-3">
      <Typography variant="small">${price}/day</Typography>
      <Typography variant="small" color="gray" className="flex gap-1">
     <Link  to={`/product/${_id}`}> <Button color="blue" size="md">Book</Button> </Link>
      </Typography>
    </CardFooter>
  </Card>
  );
};

export default ServiceMain;
