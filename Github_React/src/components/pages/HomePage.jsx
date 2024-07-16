import { Spiner } from "../Spiner";
import { ListUsers } from "../ListUsers/ListUsers";
import { UserInfo } from "../UserInfo/UserInfo";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const HomePage = ({ mode, loading, data,load }) => {
  let style = "Content";
  const [user, setUser] = useState(null);
  
  if (user) {
    data = "";
  }

  return (
    <div className={!mode ? (style += " Light") : style}>
      {loading && <Spiner />}
      {data && (
        <ListUsers
          data={data}
          mode={mode}
          archeuli={setUser}
          load={load}
        />
      )}
      {!data && <UserInfo user={user} />}
    </div>
  );
};
