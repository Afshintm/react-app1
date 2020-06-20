import React from "react";
import CoursesPages from "./CoursesPage";
//React components are instantiated. So making the function start with capital resemble the classes in JS which are functions with the constructor starting with capital letter
function HomePage() {
  //returning JSX
  return (
    <div className="jumbotron">
      <h1>Hello World</h1>
      <p>This is the homepage of the react app.</p>
      <CoursesPages name="Learning React"></CoursesPages>
      <br />
      <a href="/about">About</a>
    </div>
  );
}
// default because there is just one component
export default HomePage;
