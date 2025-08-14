import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      
      {/* navbar */}
      <Navbar/>

      {/* content */}
      <Homepage/>

      {/* footer */}
      <Footer/>

    </div>
  );
}

export default App;
