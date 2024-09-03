// import { useState } from 'react'
import { HomePage } from "./components/pages/HomePage";
import { SearchBar } from "./components/Searchbar/SearchBar";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { LigthMode } from "./components/LigthMode/LigthMode";

import "./App.css";
import useFetch from "./useFetch";

function App() {

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("mode"))
      ? JSON.parse(localStorage.getItem("mode"))
      : false
  );
  const [inputValue, setInputValue] = useState(``);
  // const [data, setData] = useState();
  // const [search, setSearch] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  
  const URL = `https://api.github.com/search/users?q=Showik`;
  const {data , loading, isError}= useFetch(URL) 
  
  
  const onsubmit = () => {
    if (inputValue.length > 3) {

    }
  };

  let ruti = document.getElementById("root");
  {
    !darkMode ? ruti.classList.add("Ligth") : ruti.classList.remove("Ligth");
  }

  return (
    <>
      <LigthMode mode={darkMode} toggle={setDarkMode} />
      <SearchBar
        data={data}
        mode={darkMode}
        error={isError}
        onclick={onsubmit}
        value={setInputValue}
      />

      {data && (
        <HomePage
          mode={darkMode}
          loading={loading}
        />
      )}
    </>
  );
}

export default App;
