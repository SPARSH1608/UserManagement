import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./store.jsx";
import { Provider } from "react-redux";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="main-div">
    <h1 className="hed">User Management</h1>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
