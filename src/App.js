import logo from './logo.svg';
import './App.css';
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div>
         <h1>Counter: 0</h1>
         <Button variant="success" className="mr-2">Increment</Button>
         <Button variant="danger">Decrement</Button>
       </div>
      </header>
    </div>
  );
}

export default App;
