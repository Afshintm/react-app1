import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>It's: {this.state.date.toLocaleTimeString()} </div>;
  }
}
export default Clock;
