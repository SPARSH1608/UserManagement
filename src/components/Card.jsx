import { useDispatch } from "react-redux";
import "./card.css";
import { removeUser } from "../features/users/userSlice";
import { openModal } from "../features/modal/modalSlice";

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { name, ph_num, email, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="container1">
      <div className="card">
        <div className="card-border-top"></div>
        <div className="img"></div>
        <span> {name}</span>
        <p className="job"> {ph_num}</p>
        <p className="job">{email}</p>

        <button
          className="edit-btn"
          onClick={() => {
            dispatch(openModal({ id }));
          }}
        >
          edit
        </button>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeUser({ id }));
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Card;
