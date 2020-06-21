import React from "react";
import Clock from "./Clock";
function Header() {
  return (
    <nav>
      <Clock />
      <a href="/">Home</a> | <a href="/about">About</a> |{" "}
      <a href="/Courses">Courses</a>
    </nav>
  );
}
export default Header;
