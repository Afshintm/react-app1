import React from "react";
class CoursesPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    this.onChange = this.onChange.bind(this);
  }

  //   onChange = (event) => {
  //     this.setState({ title: event.target.value });
  //   };

  onChange = function (event) {
    this.setState({ title: event.target.value });
  };
  render() {
    return (
      <div>
        <span>
          {this.props.name}:{this.state.title}
        </span>
        <br />
        <input value={this.state.title} onChange={this.onChange}></input>
      </div>
    );
  }
}
export default CoursesPages;
