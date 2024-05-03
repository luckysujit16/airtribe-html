import React from "react";
import { Routes, Route } from "react-router-dom";
import Slider from "./Slider";
import About from "./About";
import Courses from "./Courses";
import Contact from "./Contact";
import Batches from "./Batches";
import E404 from "./E404";
import StateEx from "../StateEx";
import LifeCyclesMethods from "../LifeCycles/LifeCyclesMethods";
import WillUnMount from "../LifeCycles/WillUnMount";
import Fetchpost from "../../Basicpost/Fetchpost";
import Basicpost from "../../Basicpost/Basicpost";
import BtcPriceData from "../../Basicpost/BtcPriceData";
import BatchesData from "../BatchesData";
import AddBatch from "../CurdEx/AddBatch";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/batches" element={<Batches />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<E404 />} />
        <Route path="/state" element={<StateEx />} />
        <Route path="/lifecycles" element={<LifeCyclesMethods />} />
        <Route path="/willunmount" element={<WillUnMount />} />
        <Route path="/fetchpost" element={<Fetchpost />} />
        <Route path="/basicpost" element={<Basicpost />} />
        <Route path="/btclive" element={<BtcPriceData />} />
        <Route path="batchesdata" element={<BatchesData />} />
        <Route path="/addbatch" element={<AddBatch />} />
      </Routes>
    </div>
  );
};

export default Routing;
