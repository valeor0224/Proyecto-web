// CatCardContainer.jsx

import React, { useState, useEffect } from "react";
import CatCard from "../../../components/cards/CatCard/CatCard";
import Desplegable from "../Desplegable/Desplegable";
import "./CatCardContainer.css";

function CatCardContainer({ cats }) {
  const [filters, setFilters] = useState({
    name: "",
    color: "",
    age: "",
    sex: "",
  });

  const [filteredCats, setFilteredCats] = useState([]);
  const [visibleCardCount, setVisibleCardCount] = useState(6);

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const applyFilters = () => {
    const newFilteredCats = cats.filter((cat) => {
      const isNameMatch =
        !filters.name || (cat && cat.nameCat && cat.nameCat.toLowerCase().includes(filters.name.toLowerCase()));
      const isColorMatch =
        !filters.color || (cat && cat.colorCat && cat.colorCat.toLowerCase().includes(filters.color.toLowerCase()));
      const isAgeMatch =
        !filters.age || (cat && cat.ageCat && cat.ageCat.toLowerCase().includes(filters.age.toLowerCase()));
      const isSexMatch =
        !filters.sex || (cat && cat.sexCat && cat.sexCat.toLowerCase().includes(filters.sex.toLowerCase()));

      return isNameMatch && isColorMatch && isAgeMatch && isSexMatch;
    });

    setFilteredCats(newFilteredCats);
    setVisibleCardCount(6); // Reset visible card count when filters change
  };

  useEffect(() => {
    applyFilters();
  }, [filters, cats]); // Include cats in the dependencies to reapply filters when the data changes

  const handleShowMore = () => {
    setVisibleCardCount((prevCount) => prevCount + 6);
  };

  return (
    <div>
      {/* Desplegable for selecting filters */}
      <Desplegable onFilterChange={updateFilters} />

      {/* Display filtered cat cards */}
      <div className="cat-card-container">
        {filteredCats.slice(0, visibleCardCount).map((cat, index) => (
          <CatCard key={index} {...cat} />
        ))}
      </div>

      {/* Button to show more cards */}
      {filteredCats.length > visibleCardCount && (
        <div className="show-more-container">
          <button onClick={handleShowMore}>VER MÁS</button>
        </div>
      )}
    </div>
  );
}

export default CatCardContainer;