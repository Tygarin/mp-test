import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./pages/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
