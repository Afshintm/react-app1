import { getCourses } from "../api/courseApi";
import React, { useEffect, useState } from "react";
import { handleError } from "../api/apiUtils";
import CourseTable from "./CourseTable";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses()
      .then((_courses) => setCourses(_courses))
      .catch(handleError);
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <CourseTable courseList={courses}></CourseTable>
    </div>
  );
}
export default CoursesPage;
