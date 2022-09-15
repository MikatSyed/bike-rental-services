import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  updateproduct,
  getProductDetails,
} from "../../../Actions/ProductAction";
import { useAlert } from "react-alert";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import MetaData from "../../MetaData/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "../Sidebar/Sidebar";
import { UPDATE_PRODUCT_RESET } from "../../../Constants/ProductConstants";

const UpdateProduct = ({ history, match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, product } = useSelector((state) => {
    //   console.log(state);
    return state.productDetails;
  });

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.updateproduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  console.log(status);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [bikeClass, setBikeClass] = useState("");
  const categories = [
    "Hero",
    "Yamaha",
    "Frazer",
    "Scooty",
    "TVS",
    "BMW"
  ];


  const serviceStatus = ["Available", "Not Available"];

  const productId = match.params.id;

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(getProductDetails(productId));
    } else {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setCategory(product.category);
      setStatus(product.status);
      setOldImages(product.images);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("product Updated Successfully");
      history.push("/admin/products");
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [
    dispatch,
    alert,
    error,
    history,
    isUpdated,
    productId,
    product,
    updateError,
  ]);

  const updateproductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    // myForm.set("bikeClass", bikeClass);
    myForm.set("category", category);
    myForm.set("status", status);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateproduct(productId, myForm));
  };

  const updateproductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

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
      <MetaData title="Update Service" />
      <div className="dashboard">
        <SideBar />
        <div>
          <Typography gutterBottom variant="h4" align="center">
            Update Service
          </Typography>
          <Grid>
            <Card
              style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}
            >
              <CardContent>
                <form
                  encType="multipart/form-data"
                  onSubmit={updateproductSubmitHandler}
                >
                  <Grid container spacing={1}>
                    <Grid xs={12} item>
                      <TextField
                        placeholder="Enter name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        value={name}
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
                        value={price}
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
                        onChange={(e) => setStatus(e.target.value)}
                        label="Choose Bike Class"
                        value={bikeClass}
                      >
                        {serviceStatus.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl className={classe.formControl}>
                      <InputLabel id="demo-simple-select-filled-label">
                        Choose Categories
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={(e) => setCategory(e.target.value)}
                        label="Categories"
                        value={category}
                      >
                        {categories.map((c) => (
                          <option key={c} value={c}>
                            {c}
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
                        onChange={updateproductImagesChange}
                      />

                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <label
                          htmlFor="contained-button-file"
                          style={{ width: "400px" }}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            component="span"
                          >
                            Update
                          </Button>
                        </label>
                        <div id="createproductFormImage">
                          {oldImages &&
                            oldImages.map((image, index) => (
                              <img
                                key={index}
                                src={image.url}
                                alt="Old product Preview"
                              />
                            ))}
                        </div>
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
                        Update
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

export default UpdateProduct;