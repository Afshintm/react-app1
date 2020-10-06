import { getCourses } from "../api/courseApi";
import React, { useEffect, useState } from "react";
import { handleError } from "../api/apiUtils";
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
      <div>
        {courses.map((c) => {
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
export default CoursesPage;
