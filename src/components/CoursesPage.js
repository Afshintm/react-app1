import React from "react";
class CoursesPages extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <span>{this.props.name}</span>;
  }
}
export default CoursesPages;
