import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import * as firebase from 'firebase';
import Calendar from 'react-calendar';

function App(){
  const list = [1];
  const listItems = list.map((e)=><div><Clock key={e}/></div>)
  return(
    <div>
      <Clock key={2}/>
      {listItems}
      <div>
        <Calendar
          value= {new Date()}
        />
      </div>
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {  // called from setState
    this.timerID = setInterval(() => this.tick(), 1000);
    //firebase
    const rootRef = firebase.database().ref().child('test');
    const ref = rootRef.child('child')
    ref.on('value',snap=>{
      console.log("came")
      console.log(snap.val());
    })
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

export default App;
