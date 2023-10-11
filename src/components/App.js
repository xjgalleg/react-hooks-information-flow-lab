import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
  };

  const handleCategoryChange = (event) => {
    selectedCategory(event.target.value);
  };

  return (
    <div className={"App " + (darkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList 
      items={itemData} 
      onCategoryChange={handleCategoryChange}
      selectedCategory={selectedCategory} 
      />
    </div>
  );
}

export default App;
