import React from "react";
import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

function SearchBar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="input-container"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="input-board"
      >
        <div className="search-input">
          <FiSearch />
          <input type="text" placeholder="მოძებნე პროდუქცია..." />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SearchBar;
