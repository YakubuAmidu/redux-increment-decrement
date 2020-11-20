import './App.css';
import { connect } from "react-redux";
import { increment, decrement } from "./actions";
import { Button } from "react-bootstrap";

function App(props) {
   function handleIncrement() {
     props.incrementCount(1)
   }

   function handleDecrement(){
     props.decrementCount(1)
   }

  return (
    <div className="App">
      <header className="App-header">
       <div>
         <h1>Counter: {props.counter}</h1>
         <Button variant="success" className="mr-2" onClick={() => handleIncrement()}>Increment</Button>
         <Button variant="danger" onClick={() => handleDecrement()}>Decrement</Button>
       </div>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer
  }
}

const mapDispatchToProps = (dispatch) => {
 return {
   incrementCount: number => dispatch(increment(number)),
   decrementCount: number => dispatch(decrement(number))
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
