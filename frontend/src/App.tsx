import { BrowserRouter, Route, Routes } from "react-router";
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/home";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
