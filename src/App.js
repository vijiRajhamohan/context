
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Routing from "./Components/Routing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
