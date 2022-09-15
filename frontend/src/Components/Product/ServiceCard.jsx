
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function ServiceCard({product}) {
  const {
        name,
        images,
        numOfReviews,
        price,
        ratings,
        _id,
        category,
        description, } = product;
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
        Cozy {ratings} Stars Apartment
      </Typography>
      <Typography>
        The place is close to Barceloneta Beach and bus stop just 2 min by
        walk and near to "Naviglio" where you can enjoy the main night life in
        Barcelona.
      </Typography>
    </CardBody>
    <CardFooter divider className="flex items-center justify-between py-3">
      <Typography variant="small">${price}/day</Typography>
      <Typography variant="small" color="gray" className="flex gap-1">
     <Link  to={`/product/${_id}`}> <Button color="blue" size="md">Book</Button> </Link>
      </Typography>
    </CardFooter>
  </Card>
  )
}

