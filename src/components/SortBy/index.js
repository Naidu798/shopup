import { useContext } from "react";
import "./index.css";
import { ShopupContext } from "../../context/ShopupContext";

const SortBY = () => {
  const { showFilter, setShowFilter, products, setProducts } =
    useContext(ShopupContext);

  const sortByProducts = (e) => {
    const value = e.target.value;
    if (value === "LOW TO HIGH") {
      setProducts((prev) => prev.sort((a, b) => a.price - b.price));
    } else if (value === "HIGH TO LOW") {
      setProducts((prev) => prev.sort((a, b) => b.price - a.price));
    } else {
      setProducts((prev) => {
        for (var i = prev.length - 1; i >= 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = prev[i];
          prev[i] = prev[j];
          prev[j] = temp;
        }
        return prev;
      });
    }
  };

  return (
    <div className="filter-head">
      <div className="filter">
        <span className="filter-items-count">{products.length} items</span>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="filter-btn"
        >
          {showFilter ? "hide filter" : "show filter"}
        </button>
      </div>
      <div>
        <select className="sortby" onChange={(e) => sortByProducts(e)}>
          <option value="RECOMMENDED">RECOMMENDED</option>
          <option value="NEWEST FIRST">NEWEST FIRST</option>
          <option value="POPULAR">POPULAR</option>
          <option value="HIGH TO LOW">PRICE : HIGH TO LOW</option>
          <option value="LOW TO HIGH">PRICE : LOW TO HIGH</option>
        </select>
      </div>
    </div>
  );
};

export default SortBY;
