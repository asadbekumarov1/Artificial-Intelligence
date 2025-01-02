import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/pages/layout/Layout";
import NotFound from "./components/notFound/NotFound";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
