// import { useState } from 'react'
import { HomePage } from "./components/pages/HomePage";
import { SearchBar } from "./components/Searchbar/SearchBar";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { LigthMode } from "./components/LigthMode/LigthMode";

import "./App.css";

function App() {
  const abortControlerRef = useRef(null);

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("mode"))
      ? JSON.parse(localStorage.getItem("mode"))
      : false
  );
  const [inputValue, setInputValue] = useState(``);
  const [data, setData] = useState();
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (search) {
      const fetchdata = async (username) => {
        abortControlerRef.current = new AbortController();
        const URL = `https://api.github.com/search/users?q=` + username;
        try {
          const response = await axios.get(URL, {
            params: { username },
            signal: abortControlerRef.current?.signal,
            headers: {
              Accept: "application/vnd.github+json",
              Authorization: "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",
              "X-GitHub-Api-Version": "2022-11-28",
            },
          });

          setData(response.data.items);
          setLoading(true);
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log("Request canceled:", error.message);
          } else {
            setIsError(true);
            console.error("Error fetching data:", error);
          }
        } finally {
          abortControlerRef.current = null;
          setLoading(false);
        }
      };
      fetchdata(inputValue);

      return () => {
        abortControlerRef.current?.abort();
        setSearch(false);
      };
    }
  }),
    [search];

  const onsubmit = () => {
    if (inputValue.length > 3) {
      setSearch(true);
      setLoading(true);
      setIsError(false);
      setData("");
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
          click={setData}
          data={data}
          mode={darkMode}
          loading={loading}
          load={setLoading}
        />
      )}
    </>
  );
}

export default App;
