import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "../node_modules/jquery/dist/jquery.min.js";
import Header from "./Components/HIT/Header.js";
import Routing from "./Components/HIT/Routing.js";
import Footer from "./Components/HIT/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}
export default App;
