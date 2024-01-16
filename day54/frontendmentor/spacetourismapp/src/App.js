import "./App.css";
import {
  Home,
  Navbar,
  logo,
  Destination,
  Crew,
  Technology,
} from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar logo={logo} />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
