import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Twitter from "../../assets/Png/Twitter.png";
import Adress from "../../assets/Png/Adress.png";
import URL from "../../assets/Png/URL.png";
import Office from "../../assets/Png/Office.png";

import "./UserInfo.css";

// eslint-disable-next-line react/prop-types
export const UserInfo = ({ user, }) => {
  const Aborter = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [userDetails, setUserDetails] = useState({});
  const [fetch, setFetch] = useState(true);

  useEffect(() => {
    if (fetch) {
      const fetchUser = async (user) => {
        Aborter.current = new AbortController();
        const url = `https://api.github.com/users/${user}`;
        try {
          const response = await axios.get(url, {
            params: { user },
            signal: Aborter.current?.signal,
            headers: {
              Accept: "application/vnd.github+json",
              Authorization: "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",
              "X-GitHub-Api-Version": "2022-11-28",
            },
          });

          setUserDetails(response.data);
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log("Request canceled:", error.message);
          } else {
            console.error("Error fetching data:", error);
          }
        } finally {
          Aborter.current = null;
        
        }
      };
      fetchUser(user);

      return () => {
        Aborter.current?.abort();
        setFetch(false);
      };
    }
  }),
    [fetch];

  console.log(userDetails);

  const er = <p className="error">No Information</p>

//   let year = userDetails.created_at.slice(0, 4);
//   let month = userDetails.created_at.slice(5, 7);
//   let day = userDetails.created_at.slice(8, 10);
// console.log(year,month,day)

  return (
    <form className="User">
      <img src={userDetails.avatar_url}></img>
      <div className="Details">
        {/* აქ წერია უზერის სახელი დრო */}
        <div className="username">
          <div>
            <h2>{userDetails.name}</h2>
            <p>{`@${userDetails.login}`}</p>
          </div>
          <div className="date">
            <h3>{`joined ${userDetails.created_at}`}</h3>
          </div>
        </div>

        {/* სპანი ბიოსთვის */}
        <span>{userDetails.bio}</span>

        {/* დივი ფოლოვერებისთვის */}
        <div className="Follow">
          {/* რეპოზიტორები */}
          <div>
            Repos
            <h2>{userDetails.public_repos}</h2>
          </div>
          {/* ფოლოვერები */}
          <div>
            followers
            <h2>{userDetails.followers}</h2>
          </div>
          {/* ფოლოვინგები */}
          <div>
            following
            <h2>{userDetails.following}</h2>
          </div>
        </div>

        {/* ადრესი */}
        <div className="adress">
          {/* ქალაქი */}
          <a>
            <img src={Adress}></img>
            <span>{userDetails.location ? userDetails.location : er}</span>
          </a>
          {/* ტვითერი */}
          <a>
            <img src={Twitter}></img>
            <span>
              {userDetails.twitter_username ? userDetails.twitter_username : er}
            </span>
          </a>
          {/* გითჰაბისლინკი */}
          <a>
            <img src={URL}></img>
            <span>{userDetails.url ? userDetails.url : er}</span>
          </a>
          {/* სახლი */}
          <a>
            <img src={Office}></img>
            <span>{userDetails.company ? userDetails.company : er}</span>
          </a>
        </div>
      </div>
    </form>
  );
};
