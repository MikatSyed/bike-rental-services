
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { addItemsToCart } from '../../Actions/CartAction'
import { clearErrors, newReview } from '../../Actions/ProductAction'
import { getProductDetails } from './../../Actions/ProductAction';
import { NEW_REVIEW_RESET } from '../../Constants/ProductConstants'
import Navbar from '../Header/Navbar'
import Loader from '../Loader/Loader'
import "./ServiceDetails.css"
import ReviewCard from '../ReviewCard/ReviewCard'
import { Button, Input } from "@material-tailwind/react";
import { Rating } from "@material-ui/lab";
import { DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { Dialog } from '@material-ui/core'
import ClassIcon from '@mui/icons-material/Class';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import BoltIcon from '@mui/icons-material/Bolt';
import BeenhereIcon from '@mui/icons-material/Beenhere';
const fakeData = {
  breadcrumbs: [
    { id: 1, name: 'Bike', href: '#' },
    { id: 2, name: 'Scoty', href: '#' },
  ],
  // images: [
  //   {
  //     src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
  //     alt: 'Two each of gray, white, and black shirts laying flat.',
  //   },
  //   {
  //     src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
  //     alt: 'Model wearing plain black basic tee.',
  //   },
  //   {
  //     src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
  //     alt: 'Model wearing plain gray basic tee.',
  //   },
  //   {
  //     src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
  //     alt: 'Model wearing plain white basic tee.',
  //   },
  // ],
  // colors: [
  //   { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  //   { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  //   { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  // ],
  // sizes: [
  //   { name: 'XXS', inStock: false },
  //   { name: 'XS', inStock: true },
  //   { name: 'S', inStock: true },
  //   { name: 'M', inStock: true },
  //   { name: 'L', inStock: true },
  //   { name: 'XL', inStock: true },
  //   { name: '2XL', inStock: true },
  //   { name: '3XL', inStock: true },
  // ],
  // description:
  //   'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  // details:
  //   'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ServiceDetails({ match }) {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const dispatch = useDispatch();
  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const [quantity, setQuantity] = useState(1);
  const [day, setDay] = useState(0);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const increaseQuantityDay = () => {
    

    const qty = day + 1;
    setDay(qty);
  };

  const decreaseQuantityDay = () => {
    

    const qty = day - 1;
    setDay(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(match.params.id, quantity,day));
    alert.success("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", match.params.id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert, reviewError, success]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
    <Navbar/>
    <div className="bg-white">
      <div className="pt-6">
        {/* <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {fakeData?.map((breadcrumb) => (
              <li key={breadcrumb._id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav> */}

        {/* Image gallery */}
        {/* <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div> */}

        {/* Product info */}
        <h1 className="service-heading">{product.name}</h1>
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
     
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 service-main">
            <div className="service-details">
         
            <p> <ClassIcon/> Class: <span>{product.bikeClass}</span></p>
            <p> <InventoryIcon/> Gearbox: <span>{product.gearBox}</span></p>
            <p> <PeopleIcon/> passengers: <span>{product.passenger}</span></p>
            <p><TwoWheelerIcon/> Mileage: <span>{product.mileage}</span></p>
            <p> <LocalGasStationIcon/> Fuel: <span>{product.fuel}</span></p>
            <p> <BoltIcon/> Engine capacity: <span>{product.capacity}</span></p>
            <p > <BeenhereIcon/> Service Status: <span className={product.status === "Available" ? "greenColor" : "redColor"}>{product.status}</span></p>
            </div>
        
          <div className="service-info">
           {product.images &&
                 product.images.map((item, i) => (
                   <img
                     key={i}
                     src={item.url}
                     alt={`${i} Slide`}
                   />
                 ))}
         </div>

          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>
         

          
        
             <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                   <Rating {...options}/>
                
                </div>
                {/* <p className="sr-only">{reviews.average} out of 5 stars</p> */}
                <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
               ( {product.numOfReviews} reviews)
                </p>
              </div>
            </div> 
            <div>
                  
                  
                    <div className="w-72 flex mt-8">
                    <Button color="red" className="mr-2" onClick={decreaseQuantity}>-</Button>
                   <div className="w-72">
                   <Input label="Hour" readOnly type="number" value={quantity}/>
                   </div>
                      <Button color="green" className="ml-2" onClick={increaseQuantity}>+</Button> 
                     </div>

                     <div className="w-72 flex mt-8">
                    <Button color="red"  className="mr-2" onClick={decreaseQuantityDay}>-</Button>
                   <div className="w-72">
                   <Input label="Day" readOnly type="number" value={day}/>
                   </div>
                      <Button color="green"  className="ml-2" onClick={increaseQuantityDay}>+</Button> 
                     </div>
                                  
                    
                  </div>


             <div className="flex items-center m-5">

             <Button disabled={product.status   === "Not Available" ? true : false} color="green" onClick={addToCartHandler} className="mr-5">Add to bag</Button>           
             <Button color="blue" onClick={submitReviewToggle}>Submit Review </Button>

             </div>
          </div>

      
<Dialog
  aria-labelledby="simple-dialog-title"
  open={open}
  onClose={submitReviewToggle}
>
  <DialogTitle>Submit Review</DialogTitle>
  <DialogContent className="submitDialog">
    <Rating
      onChange={(e) => setRating(e.target.value)}
      value={rating}
      size="large"
    />

    <textarea
      className="submitDialogTextArea"
      cols="30"
      rows="5"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    ></textarea>
  </DialogContent>
  <DialogActions>
    <Button onClick={submitReviewToggle} color="secondary">
      Cancel
    </Button>
    <Button onClick={reviewSubmitHandler} color="primary">
      Submit
    </Button>
  </DialogActions>
</Dialog>

{product.reviews && product.reviews[0] ? (
            <div className="reviews">
            <h3 className="reviewsHeading">REVIEWS</h3>

             <div>
             {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))} 
             </div>
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}

        </div>        
      </div>
    </div>

  
    </>
  )}
  </>
  )
}
