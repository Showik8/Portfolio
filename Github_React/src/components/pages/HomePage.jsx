import { useState, useEffect, useRef } from "react";
import axios from "axios";

export const HomePage = () => {
  const abortControlerRef = useRef(null);

  const [inputValue, setInputValue] = useState(``);
  const [data, setData] = useState(Object);
  const [search, setSearch] = useState(false);

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
          setData(response.data);
          console.log(data);
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log("Request canceled:", error.message);
          } else {
            console.error("Error fetching data:", error);
          }
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
    setSearch(true);
  };

  console.log(data)
  return (
    <>
      <h1>Home Page</h1>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button onClick={onsubmit}>Pleas</button>
    </>
  );
};
