import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ServiceMain from "../Product/ServiceMain.jsx";
import MetaData from "./../MetaData/MetaData";
import { clearErrors, getproduct } from "../../Actions/ProductAction.js";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";
import AllReviews from "../AllReviews/AllReviews";
import FeatureService from "../FeaturedService/FeaturedService";
import Worker from "../Worker/Worker";
import HeadLine from "../Header/HeadLine";
import Navbar from "../Header/Navbar";
import FeatureSection from "../FeaturedService/FeaturedSection";
import PromoSection from "./Slider";
import Footer from "../Footer/Footer";
import { getAllOrders } from "../../Actions/OrderAction";
import BestSell from "../BestSell/BestSell";
import About from "../About/About";


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => {
    // console.log(state.products);
    return state.products;
  });


  const { orders} = useSelector((state) => state.allOrders); 
  // console.log(orders)
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAllOrders());
    dispatch(getproduct());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Bike Rental" />
 
          <div >
          <HeadLine/>
         {/* <Header/> */}  
         <Navbar/>
          </div>
          <div>
         <PromoSection/>
        <FeatureService/>
          </div>

          <h2 className="homeHeading">FEATURE BIKE SERVICE</h2>
          <div className="service-card">
            <div >
              {products &&
                products.slice(0,7).map((product) => (   
                  <ServiceMain key={product._id} product={product} />
                ))}
          
            </div>
            <AllReviews />
            <Worker/>
            {/* <AllBlog/> */}
         
          </div>
       <div className="best-sell">
       <h2 className="homeHeading">BEST SELLS</h2>
       <div>
          {
            orders?.map((order) => <BestSell order={order} key={order._id}/>)
           }
      </div>   
      </div>
          <FeatureSection/>
          <About/>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
