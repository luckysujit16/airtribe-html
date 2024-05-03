import logo from "./logo.svg";
import "./App.css";
// import "./Components/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import Basicfunction from "./Components/Basicfunction";
import BasicProps from "./Components/BasicProps";
import MovieEx from "./Components/MovieEx";
import Routing from "./Components/HIT/Routing";
import MobileEx from "./Components/MobileEx";
import img1 from "./assets/iphone-15-pro-max-render.avif";
import img2 from "./assets/apple-iphone-14-pro-max-128gb-space-black.jpg";
import img3 from "./assets/OIP.jpeg";
import img4 from "./assets/2453.png";
import StyleEx from "./Components/StyleEx";
import BasicClass from "./Components/BasicClass";
import BootstrapEx from "./Components/BootstrapEx";
import Header from "./Components/HIT/Header";
import Footer from "./Components/HIT/Footer";

function App() {
  return (
    <div className="App">
      {/* <div>
        <h1>This is Sujit's 1st React Project.</h1>
      </div> */}
      <Header />
      {/* <Slider /> */}
      {/* <About /> */}
      {/* <Batches /> */}
      <Routing />
      <Footer />
      {/* <BootstrapEx /> */}
      {/* <BasicClass topic="Basic Class Component" />
      <BasicClass topic="Basic Function" /> */}
      {/* <Basicfunction /> */}
      {/* <Basicpost />
      <Fetchpost /> */}
      {/* <StyleEx /> */}
      {/* <Routing name="Sujit" role="React Developer" />
      <Routing name="Pradeep" role="Node Js Developer" /> */}
      {/* <MobileEx path={img1} title="iPhone 15 Max Pro" price="178999/-" />
      <MobileEx path={img2} title="iPhone 15 Max" price="144999/-" />
      <MobileEx path={img3} title="iPhone 14 Max Pro" price="129999/-" />
      <MobileEx path={img4} title="iPhone 14 Max" price="78999/-" /> */}
      {/* <MovieEx
        title="Crew"
        caption="Comedy/Thriller"
        path="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni44LzEwICA0NUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00344265-mcnbkghxvr-portrait.jpg"
      />
      <MovieEx
        title="Godzilla"
        caption="Action/SciFi/Thriller"
        path="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA2Mi45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00358147-szbzfgetrb-portrait.jpg"
      />
      <MovieEx
        title="Sawarkar"
        caption="Biography/Drama"
        path="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA1NC4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00330062-afywqbrlrl-portrait.jpg"
      />
      <MovieEx
        title="Maidaan"
        caption="Biography/Drama/Sports"
        path="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAyNUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00341317-tfhyqcxzpt-portrait.jpg"
      /> */}
    </div>
  );
}
export default App;
