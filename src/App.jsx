import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Components from "./Components/Component";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Components />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
