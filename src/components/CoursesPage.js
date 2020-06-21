import { getCourses } from "../api/courseApi";
import React from "react";
import { handleError } from "../api/apiUtils";
class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }
  componentDidMount() {
    //making Api call after component mounted
    getCourses()
      .then((courses) => this.setState({ courses: courses }))
      .catch(handleError);
  }
  render() {
    return (
      <div>
        <h2>Courses</h2>
        <div>
          {this.state.courses.map((c) => {
            return (
              <div key={c.id}>
                <span>{c.title}</span>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default CoursesPage;
