import { useSelector } from "react-redux";
import Card from "./Card";
import "./cardContainer.css";

const CardContainer = () => {
  const { users } = useSelector((store) => {
    return store.users;
  });
  if (users.length < 1)
    return (
      <div>
        <h1>No users</h1>
      </div>
    );
  return (
    <div className="card_container">
      {users.map((u, index) => {
        return (
          <Card
            key={index}
            name={u.name}
            ph_num={u.ph_num}
            email={u.email}
            id={u.id}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
