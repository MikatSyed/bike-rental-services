import React from "react";
import "./FeaturedService.css";
import CheckIcon from '@mui/icons-material/Check';

const FeatureService = () => {
  return (
    <section>
      <div className="feature-main">
        <div className="feature-container">
          <h1>
            Renroll - The company <br /> to offer the best scooter <br /> & bike
            rental services
          </h1>
          <img
            src="https://parkofideas.com/renroll/demo-1/wp-content/uploads/2019/11/renroll-0505041743-1500x767.jpg"
            alt=""
          />
        </div>

        <div className="feature-section">
          <img
            src="https://parkofideas.com/renroll/demo-3/wp-content/uploads/2020/02/renroll-0820248434.jpg"
            alt=""
          />
          <h3>Renting Service Features</h3>
          <p>
            Consectetur adipisicing elit sed eiusmod tempor dolore magna aliqua
            ad minim veniam quis nostrud exercitation aliquip.
          </p>
          <h4><CheckIcon/> Free booking cancellation up to 15 hours</h4>
          <h4><CheckIcon/> We offer 24/7 road rental assistance</h4>
          <h4><CheckIcon/> More than 350.000 satisfied customers</h4>
          <h4><CheckIcon/> Fleet of over 8,000 brand new scooters & bikes</h4>
        </div>
      </div>
    </section>
  );
};

export default FeatureService;
