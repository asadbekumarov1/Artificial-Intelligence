import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/pages/layout/Layout";
import NotFound from "./components/notFound/NotFound";
import Home from "./components/pages/home/Home";
import Apply from "./components/apply/Apply";
import Card from "./components/card/Card";
import What from "./components/what/What";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/card" element={<Card />} />
          <Route path="/what" element={<What />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
