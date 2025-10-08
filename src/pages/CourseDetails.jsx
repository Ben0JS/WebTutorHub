import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data";

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  const navigate = useNavigate(`/course/${course.id}/tutorial`);

  if (!course) return <h2>Course Not Found</h2>;

  const handleStart = () => {
    // Get current user
    const user = localStorage.getItem("user");
    if (!user) {
      alert("Please login first");
      return;
    }

    // Get user's courses from storage
    let userCourses = JSON.parse(localStorage.getItem("userCourses")) || {};

    // Add this course to user's list
    if (!userCourses[user]) {
      userCourses[user] = [];
    }
    if (!userCourses[user].includes(course.id)) {
      userCourses[user].push(course.id);
    }

    localStorage.setItem("userCourses", JSON.stringify(userCourses));

    // Redirect to tutorial
    navigate(`/course/${course.id}/tutorial`);
  };

  return (
    <div className="container mt-5">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <button className="btn btn-primary" onClick={handleStart}>
        Start Course
      </button>
    </div>
  );
}
