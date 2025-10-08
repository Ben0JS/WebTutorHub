import { courses } from "../data";

export default function Profile() {
  const user = localStorage.getItem("user");

  if (!user) {
    return <h2>Please login to view profile</h2>;
  }

  // Get user's courses
  const userCourses = JSON.parse(localStorage.getItem("userCourses")) || {};
  const enrolled = userCourses[user] || [];

  return (
    <div className="container mt-5">
      <h1>Welcome, {user}!</h1>
      <p className="mb-4">Your course progress will be shown here.</p>

      {enrolled.length > 0 ? (
        <div>
          <h3>Enrolled Courses</h3>
          <ul className="list-group mt-3">
            {enrolled.map(courseId => {
              const course = courses.find(c => c.id === courseId);
              return (
                <li key={courseId} className="list-group-item">
                  {course ? course.title : "Unknown Course"}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>You have not started any courses yet.</p>
      )}
    </div>
  );
}
