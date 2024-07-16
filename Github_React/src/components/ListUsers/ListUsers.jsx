import "./ListUsers.css";

export const ListUsers = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data, mode, archeuli , } = props;



  let style = "UserList";
  return (
    <div className={!mode ? (style += " Light") : style}>
      {data.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <li key={item.id}>
            <img src={item.avatar_url}></img>
            {item.login}
            <button onClick={() => archeuli(item.login)}>view</button>
          </li>
        );
      })}
    </div>
  );
};
