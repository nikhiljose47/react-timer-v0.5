import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";

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

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {  // called from setState
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  onDelete(a,b,c){

  }

  render() {
    return (
      <div key={this.props.key}>
        {" "}
        <h1>hello,world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={(e)=>this.onDelete('arg1','arg2',e)}></button>
        <button onClick={this.onDelete.bind(this,'arg1','arg2')}></button>  
      </div>
      //both equivalent buttons!
    );

  }
}



function App(){
  const list = [1,2,3];
  const listItems = list.map((e)=><div><Clock key={e}/></div>)
  return(
    <div>
      <Clock key={7}/>
      <Clock />
      {listItems}
    </div>
  );
}
export default App;
