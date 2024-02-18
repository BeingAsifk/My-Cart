import "./App.css";
import CartContainer from "./CartContainer";
import Navbar from "./Navbar";
import { useGlobalContext } from "./context";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...⚙️</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
