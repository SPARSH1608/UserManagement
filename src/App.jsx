import { useSelector } from "react-redux";
import CardContainer from "./components/CardContainer";
import Form from "./components/Form";
import Modal from "./components/Modal.jsx";
import { useEffect } from "react";
import "./App.css";
const App = () => {
  const { isOpen } = useSelector((store) => store.modal);
  const { users } = useSelector((store) => store.users);
  useEffect(() => {}, [users, isOpen]);
  return (
    <div>
      {isOpen && <Modal />}
      <div className="f-container">
        <Form />

        <CardContainer />
      </div>
    </div>
  );
};

export default App;
