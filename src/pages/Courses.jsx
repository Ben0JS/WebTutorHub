import { Link } from "react-router-dom";
import { courses } from "../data";

export default function Courses() {
  const colors = [
  "primary",
  "warning",
  "success",
  "danger",
  "info",
  "secondary",
];
  return (

<div className="container mt-4 flex-grow-1 mb-4">
  <h1 className="mb-4">All Courses</h1>
  <div className="row g-4">
    {courses.map((course, index) => {
      const color = colors[index % colors.length]; // Cycle colors
      return (
        <div className="col-md-6 col-lg-4" key={course.id}>
          <div className={`card h-100 shadow-sm border-${color} bg-${color}-subtle text-${color}-emphasis`}>
            <div className="card-body">
              <h3 className={`card-title text-${color}-emphasis`}>{course.title}</h3>
              <p className="card-text">{course.description}</p>
              <Link className={`btn btn-outline-${color} mt-3 text-${color}-emphasis`} to={`/course/${course.id}`}>
                View Details
              </Link>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>
  );
}