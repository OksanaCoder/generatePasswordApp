import "bootstrap/dist/css/bootstrap.min.css";
import PasswordDetails from "./components/PasswordDetails";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h2>Password Generator</h2>
      <PasswordDetails />
    </div>
  );
}

export default App;
