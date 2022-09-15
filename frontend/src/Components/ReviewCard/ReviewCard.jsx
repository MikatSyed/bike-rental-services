import { Rating } from "@material-ui/lab";
import React from "react";
import profile from "../../image/Profile.png";
import "./ReviewCard.css"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Card className="w-96">
    <CardBody className="mt-2">
      <Typography variant="h5" className="mb-2">
        {review.name}
      </Typography>
      <Typography color="blue" className="mt-8">
      {review.comment}
      </Typography>
    </CardBody>
    <CardFooter>
     <Rating {...options}/>    
    </CardFooter>
  </Card>
  );
};

export default ReviewCard;
