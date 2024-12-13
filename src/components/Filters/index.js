import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { filterOptions } from "../../assets/data";
import { useState } from "react";

import "./index.css";

const Filters = () => {
  const [activeFilter, setActiveFilter] = useState([]);

  const showFiltersOptions = (id) => {
    setActiveFilter((prev) =>
      prev.includes(id) ? prev.filter((idx) => idx !== id) : [...prev, id]
    );
  };

  const categoryOptions = (category) => {
    return (
      <div>
        <button className="unselect-all">Unselect all</button>
        <ul>
          {category.map((option) => {
            return (
              <li key={"option" + option.id} className="filter-option">
                <input type="checkbox" className="customize-checkbox" />
                <span className="option-name">{option.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const filtersMenu = () => {
    return (
      <div className="filters-menu">
        <div className="customize-container">
          <input type="checkbox" className="customize-checkbox" />
          <label className="customize-label">CUSTOMIZBLE</label>
        </div>
        <div className="filter-options">
          {filterOptions.map((item) => {
            return (
              <li key={"item" + item.id} className="filter-item">
                <div className="filter-name">
                  <span className="customize-label">{item.name}</span>
                  {!activeFilter.includes(item.id) ? (
                    <IoChevronDownSharp
                      style={{ fontSize: "20px" }}
                      onClick={() => showFiltersOptions(item.id)}
                    />
                  ) : (
                    <IoChevronUpSharp
                      style={{ fontSize: "20px" }}
                      onClick={() => showFiltersOptions(item.id)}
                    />
                  )}
                </div>
                <p className="selected">{item.selected}</p>
                {activeFilter.includes(item.id) && (
                  <div>{categoryOptions(item.category)}</div>
                )}
              </li>
            );
          })}
        </div>
      </div>
    );
  };

  return <div>{filtersMenu()}</div>;
};

export default Filters;
