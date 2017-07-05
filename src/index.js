import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MessageBox from './message_box';

const messages = [
  {name: "ok", message: "Everything is A-OK"},
  {name: "boo", message: "Where are you going? We need you here!"},
  {name: "wave", message: "Hi! Whazzup?"},
  {name: "visit", message: "If you ever want to visit, ping me!"}
];

let shuffled = [0, 1, 2, 3].sort(() => 0.5 - Math.random());

class HelloWorld extends React.Component {

  render() {
    const message = messages[shuffled[0]]['message'];

    return (
      <div className="shoutContainer">
        <Shout />
        <Talk message={message} />
        <Time />
        <LikeButton />
        <MessageBox />
      </div>)
  }
}
function Shout () {
  return <div><h1> Hello World Peace....!!!</h1></div>
}

const Talk = ({message}) => (
    <p style={{color: "#31b048"}}>{message} ({shuffled})</p>
)

const Time = () => {
  return <span className="time"> 3h ago</span>
}

const LikeButton = () => {
  return <i className="fa fa-heart like-button"/>
}

ReactDOM.render(<HelloWorld/>, document.querySelector('#root'));