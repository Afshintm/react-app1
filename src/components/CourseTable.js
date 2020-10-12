import React from "react";

function CourseTable(props) {
  console.log(props.courseList);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Authour Id</th>
          </tr>
        </thead>
        <tbody>
          {props.courseList.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.title}</th>
                <th>{item.authourId}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CourseTable;
