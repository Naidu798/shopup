import React, { useContext } from "react";
import Header from "../Header";
import Filters from "../Filters";

import BannerText from "../BannerText";
import Products from "../Products";
import SortBY from "../SortBy";

import "./index.css";
import { ShopupContext } from "../../context/ShopupContext";

const Home = () => {
  const { showFilter } = useContext(ShopupContext);
  return (
    <div className="home-container">
      <Header />
      <BannerText />
      <SortBY />
      <div className="filters-products">
        {showFilter && <Filters />}
        <Products />
      </div>
    </div>
  );
};

export default Home;
