import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Misdemeanours from "./Misdemeanours";
import Confession from "./Confession";
import NotFound from "./NotFound";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/misdemeanours" element={<Misdemeanours />}></Route>
    <Route path="/confession" element={<Confession />}></Route>
    <Route path="*" element={<NotFound />}></Route>
  </Routes>
);

export default Router;