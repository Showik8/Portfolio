import { useEffect, useState, useRef } from "react";
import axios from "axios";


const useFetch=(url)=>{
  const abortControlerRef = useRef(null);

     const [data, setData] = useState();
     const [search, setSearch] = useState(true);
     const [loading, setLoading] = useState(false);
     const [isError, setIsError] = useState(false);

     useEffect(() => {
       if (search) {
           const fetchdata = async () => {
             abortControlerRef.current = new AbortController();
             try {
               const response = await axios.get(url, {
                 params: { url },
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
         fetchdata(url);

         return () => {
           abortControlerRef.current?.abort();
           setSearch(false);
         };
       }

     }),
       [url];

     return { data, search, loading, isError };
}

export default useFetch