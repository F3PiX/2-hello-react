import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class HelloWorld extends React.Component {
  render() {
    return (
      <div className="shoutContainer">
        <Shout />
        <Talk message="Please answer me. We need you over here."/>
        {/*<Talk message={this.props.messages[1]}/>*/}
        <Time />
        <LikeButton />
      </div>)
  }
}

function Shout () {
  return <div><h1> Hello World Peace....!!!</h1></div>
}

function Talk(props) {
  return <div>
    <p style={{color: "#31b048"}}>{props.message}</p>
  </div>
}

const Time = () => {
  return <span className="time"> 3h ago</span>
}

const LikeButton = () => {
  return <i className="fa fa-heart like-button"/>
}


ReactDOM.render(<HelloWorld/>, document.querySelector('#root'));