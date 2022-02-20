import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className = "card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h2 className="my-5">{count}</h2>
            <button
              className="btn btn-success mx-3"
              onClick={() => setCount(count + 1)}>
              Increment
              </button>

            <button
              className="btn btn-danger mx-3"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}>
              Decrement
              </button>

            <button
              className="btn btn-secondary mx-3"
              onClick={() => setCount(0)}
              disabled={count === 0}>
              Reset
              </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


// class App extends Component {
// constructor (props) {
//   super(props);
//   this.state = {
//     coun: 0
//   }
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1})
//   }

//   decrement = () => {
//     this.setState({ count: this.state.count - 1})
//   }

//   render () {
//     return (
//       <div className="App">
//         <button onClick={this.increment} className="counter">+</button>
//         <button onClick={this.decrement} className="counter"></button>
//         <h2>{this.state.count}</h2>

//       </div>
//     );
//   }
// }




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
