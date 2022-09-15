// import React, { Fragment, useEffect, useState } from "react";
// import "./NewProduct.css";
// import { useSelector, useDispatch } from "react-redux";
// import { clearErrors, createproduct } from "../../../Actions/ProductAction";
// import { useAlert } from "react-alert";
// import { Button } from "@material-ui/core";
// import MetaData from "../../MetaData/MetaData";
// import AccountTreeIcon from "@material-ui/icons/AccountTree";
// import DescriptionIcon from "@material-ui/icons/Description";
// import StorageIcon from "@material-ui/icons/Storage";
// import SpellcheckIcon from "@material-ui/icons/Spellcheck";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
// import SideBar from "../Sidebar/Sidebar";
// import { NEW_PRODUCT_RESET } from "../../../Constants/ProductConstants";

// const Newproduct = ({ history }) => {
//   const dispatch = useDispatch();
//   const alert = useAlert();

//   const { loading, error, success } = useSelector((state) => state.newproduct);

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState(0);
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [serviceStatus, setserviceStatus] = useState("Available");
//   const [quantity, setQuantity] = useState(0);
//   const [images, setImages] = useState([]);
//   console.log(images);
//   const [imagesPreview, setImagesPreview] = useState([]);
//   const [bikeClass,setBikeClass] = useState();
//   const [capacity,setCapacity] = useState();
//   const [fuel,setFuel] = useState();
//   const [mileage,setMileage] = useState();
//   const [passenger,setPassenger] = useState();

  

//   const categories = [
//     "Home",
//     "Industrial",
//     "Hotel",
//     "Medical",
//     "Accessories",
//     "Production",
//     "Agriculture",
//   ];

//    const bikeClasses = [
//     "Hoverboard",
//     "Standard",
//     "Maxi-scooter"
//   ];
     
//   const status = [
//     "Available",
//     "Not Available",
//   ];

//   const engineCapacity = [
//     "500 Watts",
//     "600 Watts",
//     "800 Watts",
//     "1000 Watts",
//     "1200 Watts"   
//   ];

//   const bikeFuel = [
//     "Gasoline",
//     "Electric",
//     "Oil"
//   ]

//   const  bikeMileage = [
//     30,
//     40,
//     50,
//     "Unlimited"
//   ]
  
//   const maxPassengers = [
//     1,
//     2,
//     3
//   ]


//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }

//     if (success) {
//       alert.success("product Created Successfully");
//       history.push("/admin/dashboard");
//       dispatch({ type: NEW_PRODUCT_RESET });
//     }
//   }, [dispatch, alert, error, history, success]);

//   const createproductSubmitHandler = (e) => {
//     e.preventDefault();

//     const myForm = new FormData();

//     myForm.set("name", name);
//     myForm.set("price", price);
//     myForm.set("description", description);
//     myForm.set("category", category);
//     myForm.set("status", serviceStatus);
//     myForm.set("quantity", quantity);
//     myForm.set("bikeClass",bikeClass);
//     myForm.set("capacity",capacity);
//     myForm.set("fuel",fuel);
//     myForm.set("mileage",mileage);
//     myForm.set("passenger",passenger);


//     images.forEach((image) => {
//       myForm.append("images", image);
//     });
//     dispatch(createproduct(myForm));
//   };

//   const createproductImagesChange = (e) => {
//     let files = Array.from(e.target.files);
//     console.log(files);
//     setImages([]);
//     setImagesPreview([]);

//     files.forEach((file) => {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setImagesPreview((old) => [...old, reader.result]);
//           setImages((old) => [...old, reader.result]);
//         }
//       };

//       reader.readAsDataURL(file);
//     });
//   };

//   return (
//     <Fragment>
//       <MetaData title="Create Service" />
//       <div className="dashboard">
//         <SideBar />
//         <div className="newproductContainer">
//           <form
//             className="createproductForm"
//             encType="multipart/form-data"
//             onSubmit={createproductSubmitHandler}
//           >
//             <h1>Create Service</h1>

//             <div>
//               <SpellcheckIcon />
//               <input
//                 type="text"
//                 placeholder="Service Name"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div>
//               <AttachMoneyIcon />
//               <input
//                 type="number"
//                 placeholder="Price"
//                 required
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </div>

//             <div>
//               <DescriptionIcon />

//               <textarea
//                 placeholder="Service Description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 cols="30"
//                 rows="1"
//               ></textarea>
//             </div>

//             <div>
//               <AccountTreeIcon />
//               <select onChange={(e) => setCategory(e.target.value)}>
//                 <option value="">Choose Category</option>
//                 {categories.map((cate) => (
//                   <option key={cate} value={cate}>
//                     {cate}
//                   </option>
//                 ))}
//               </select>
//             </div>


//             <div>
//               <AccountTreeIcon />
//               <select onChange={(e) => setFuel(e.target.value)}>
//                 <option value="">Choose Fuel </option>
//                 {bikeFuel.map((cate) => (
//                   <option key={cate} value={cate}>
//                     {cate}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <AccountTreeIcon />
//               <select onChange={(e) => setMileage(e.target.value)}>
//                 <option value="">Choose Mileage</option>
//                 {bikeMileage.map((cate) => (
//                   <option key={cate} value={cate}>
//                     {cate}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//                 <AccountTreeIcon />
//               <select onChange={(e) => setBikeClass(e.target.value)}>
//                 <option value="">Choose Class</option>
//                 {bikeClasses.map((cate) => (
//                   <option key={cate} value={cate}>
//                     {cate}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <AccountTreeIcon />
//               <select onChange={(e) => setCapacity(e.target.value)}>
//                 <option value="">Choose Capacity</option>
//                 {engineCapacity.map((cate) => (
//                   <option key={cate} value={cate}>
//                     {cate}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <AccountTreeIcon />
//               <select onChange={(e) => setPassenger(e.target.value)}>
//                 <option value="">Choose Passenger</option>
//                 {maxPassengers.map((cate) => (
//                   <option key={cate} value={cate}>
//                     {cate}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div> 
//             <AccountTreeIcon />          
//               <select onChange={(e) => setserviceStatus(e.target.value)}>
//                 <option value="">Choose Status</option>
//                 {status.map((cate) => (
//                   <option key={cate} value={cate}>
//                     {cate}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* <div>
//               <StorageIcon />
//               <input
//                 type="text"
//                 placeholder="Status"
//                 required
//                 onChange={(e) => setStatus(e.target.value)}
//               />
//             </div>  */}

//             <div id="createproductFormFile">
//               <input
//                 type="file"
//                 name="avatar"
//                 accept="image/*"
//                 onChange={createproductImagesChange}
//                 multiple
//               />
//             </div>

//             <div id="createproductFormImage">
//               {imagesPreview.map((image, index) => (
//                 <img key={index} src={image} alt="product Preview" />
//               ))}
//             </div>

//             <Button
//               id="createproductBtn"
//               type="submit"
//               disabled={loading ? true : false}
//             >
//               Create
//             </Button>
//           </form>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Newproduct;


import React, { Fragment, useEffect, useState } from "react";
import "./NewProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createproduct } from "../../../Actions/ProductAction";
import { useAlert } from "react-alert";
import MetaData from "../../MetaData/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { NEW_PRODUCT_RESET } from "../../../Constants/ProductConstants";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import Sidebar from "../Sidebar/Sidebar";

const Newproduct = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newproduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  // const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  // const [serviceStatus, setserviceStatus] = useState("Available");/
  const [quantity, setQuantity] = useState(0);
  const [images, setImages] = useState([]);
  console.log(images);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [bikeClass,setBikeClass] = useState();
  const [capacity,setCapacity] = useState();
  const [fuel,setFuel] = useState();
  const [mileage,setMileage] = useState();
  const [passenger,setPassenger] = useState();

  

  const categories = [
    "Hero",
    "Yamaha",
    "Frazer",
    "Scooty",
    "TVS",
    "BMW",
    
  ];

   const bikeClasses = [
    "Hoverboard",
    "Standard",
    "Maxi-scooter"
  ];
     
  const status = [
    "Available",
    "Not Available",
  ];

  const engineCapacity = [
    "500 Watts",
    "600 Watts",
    "800 Watts",
    "1000 Watts",
    "1200 Watts"   
  ];

  const bikeFuel = [
    "Gasoline",
    "Electric",
    "Oil"
  ]

  const  bikeMileage = [
    30,
    40,
    50,
    "Unlimited"
  ]
  
  const maxPassengers = [
    1,
    2,
    3
  ]


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("product Created Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createproductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    // myForm.set("description", description);
    myForm.set("category", category);
    // myForm.set("status", serviceStatus);
    myForm.set("quantity", quantity);
    myForm.set("bikeClass",bikeClass);
    myForm.set("capacity",capacity);
    myForm.set("fuel",fuel);
    myForm.set("mileage",mileage);
    myForm.set("passenger",passenger);


    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createproduct(myForm));
  };

  const createproductImagesChange = (e) => {
    let files = Array.from(e.target.files);
    console.log(files);
    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        minWidth: 250,
      },
    },
    input: {
      display: "none",
    },
  }));

  const useStyle = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 190,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  const classe = useStyle();

  return (
    <Fragment>
      <MetaData title="Create Service" />

      <div className="dashboard">
        <Sidebar />
        <div>
          <Typography gutterBottom variant="h4" align="center">
            Create Service
          </Typography>
          <Grid>
            <Card
              style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}
            >
              <CardContent>
                <form
                  encType="multipart/form-data"
                  onSubmit={createproductSubmitHandler}
                >
                  <Grid container spacing={1}>
                    <Grid xs={12} item>
                      <TextField
                        placeholder="Enter name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Price"
                        variant="outlined"
                        fullWidth
                        required
                        type="number"
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </Grid>
                    <FormControl className={classe.formControl}>
                      <InputLabel id="demo-simple-select-filled-label">
                        Choose Bike Class
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={(e) => setBikeClass(e.target.value)}
                        label="Choose Bike Class"
                      >
                        {bikeClasses.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl className={classe.formControl}>
                      <InputLabel id="demo-simple-select-filled-label">
                        Choose Bike Capacity
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={(e) => setCapacity(e.target.value)}
                        label="Choose Bike Class"
                      >
                        {engineCapacity.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl className={classe.formControl}>
                      <InputLabel id="demo-simple-select-filled-label">
                        Choose Bike Fuel
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={(e) => setFuel(e.target.value)}
                        label="Choose Bike Class"
                      >
                        {bikeFuel.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl className={classe.formControl}>
                      <InputLabel id="demo-simple-select-filled-label">
                        Choose Mileage
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={(e) => setMileage(e.target.value)}
                        label="Choose Bike Class"
                      >
                        {bikeMileage.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                    {/* <FormControl className={classe.formControl}>
                      <InputLabel id="demo-simple-select-filled-label">
                        Choose Bike Fuel
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={(e) => setPassenger(e.target.value)}
                        label="Choose Bike Class"
                      >
                        {maxPassengers.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </Select>
                    </FormControl> */}

                    <FormControl className={classe.formControl}>
                      <InputLabel id="demo-simple-select-filled-label">
                        Choose Categories
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={(e) => setCategory(e.target.value)}
                        label="Categories"
                      >
                        {categories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </Select>
                    </FormControl>

                    {/* <FormControl className={classe.formControl}>
                      <InputLabel id="demo-simple-select-filled-label">
                        Choose Service Status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={(e) => setserviceStatus(e.target.value)}
                        label="Choose Bike Class"
                      >
                        {status.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </Select>
                    </FormControl> */}
                    
                    <FormControl className={classe.formControl}>
                      <InputLabel id="demo-simple-select-filled-label">
                        Choose Passenger
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={(e) => setPassenger(e.target.value)}
                        label="Choose Bike Class"
                      >
                        {maxPassengers.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </Select>
                    </FormControl>


                    <div className={classes.root}>
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        name="avatar"
                        onChange={createproductImagesChange}
                      />

                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <label
                          htmlFor="contained-button-file"
                          style={{ width: "370px" }}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            component="span"
                          >
                            Upload Bike Images
                          </Button>
                        </label>
                        <div id="createproductFormImage">
                          {imagesPreview.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt="product Preview"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Grid item xs={12}>
                      <Button
                        id="createproductBtn"
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={loading ? true : false}
                      >
                        Create
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
};

export default Newproduct;
