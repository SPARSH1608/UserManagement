import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import UserForm from "./UserForm";
import "./modal.css";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <UserForm />
      </div>
    </aside>
  );
};

export default Modal;
