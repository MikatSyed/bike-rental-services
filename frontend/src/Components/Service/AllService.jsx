import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getproduct } from "../../Actions/ProductAction.js";
import Loader from "../Loader/Loader.jsx";
import "./AllServices.css";
import Pagination from "react-js-pagination";
import MetaData from "../MetaData/MetaData";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import ServiceCard from "../Product/ServiceCard.jsx";
import Navbar from "../Header/Navbar.jsx";

const categories = [
  "Hero",
  "Yamaha",
  "Frazer",
  "Scooty",
  "TVS",
  "BMW",
];

const AllService = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 1000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const keyword = match.params.keyword;
  // console.log(keyword);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const dispatch = useDispatch();
  const {
    loading,
    error,
    products,
    productsCount,
    resultPerPage,
    filteredproductsCount,
  } = useSelector((state) => {
    // console.log();
    return state.products;
  });
  console.log(products)
  console.log('p',productsCount);
  console.log('d',resultPerPage);
  useEffect(() => {
    dispatch(getproduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings]);

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredproductsCount;
  console.log('c',count);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="SERVICE -- BIKE RENTAL" />
          <Navbar/>
          <div>
            <h2 className="productsHeading">ALL SERVICES</h2>
            <div className="services">
             <div>
             {products &&
                products.map((product) => (
                  <ServiceCard key={product._id} product={product} />
                ))}
             </div>
            </div>
          </div>

          <div className="filter-box">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={1000}
            />

            <Typography>Categories</Typography>
            <ul className="category-box">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>

          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default AllService;
