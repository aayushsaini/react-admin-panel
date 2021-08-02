import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;